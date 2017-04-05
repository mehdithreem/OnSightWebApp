import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {User} from "../_model/user";

import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

	constructor(private http: Http) {
	}

	getActiveUserDetail(): Promise<User> {
		return this.http
			.get('/onsight/user_info', { withCredentials: true })
			.toPromise()
			.then(response => {
				console.log('user info');
				console.log(response.json() as User);
				return response.json().userInfo as User;
			})
			.catch(err => {
				console.error("user info: " + err);
			});
	}

	getUnconfirmedUsers(): Promise<User[]> {
		return this.http
			.get('/onsight/unconfirmed_users', { withCredentials: true })
			.toPromise()
			.then(response => {
				return response.json().unconfirmedUsers as User[];
			})
			.catch(err => {
				console.error("unconfirmed users: " + err);
			});
	}

	rejectUser(username: string): Promise<boolean> {
		let params = new URLSearchParams();
		params.append('username', username);
		params.append('status', 'reject');
		params.append('roles', 'user');

		return this.http
			.post('/onsight/specify_user_status','', {search: params})
			.toPromise()
			.then(response => {
				return response.json().result;
			})
			.catch(err => {
				console.error("reject user: " + err);
				return false;
			});
	}

	acceptUser(username: string, isAdmin: boolean): Promise<boolean> {
		let params = new URLSearchParams();
		params.append('username', username);
		params.append('status', 'confirm');
		params.append('roles', isAdmin ? 'admin' : 'user');

		return this.http
			.post('/onsight/specify_user_status', '', { search: params })
			.toPromise()
			.then(response => {
				return response.json().result;
			})
			.catch(err => {
				console.error("accept user: " + err);
				return false;
			});
	}

}
