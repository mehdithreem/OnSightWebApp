/**
 * Created by mehdithreem on 2/8/17.
 */

import {Injectable} from "@angular/core";
import {Http, Response, URLSearchParams} from "@angular/http";

import {User} from "../_model/user";
import 'rxjs/add/operator/toPromise';
import {UserService} from "./user.service";

@Injectable()
export class AuthenticationService {
	redirectUrl: string; // TODO: implement this

	constructor(private http: Http, private uservice: UserService) {}

	login(username: string, password: string): Promise<string> {
		let params = new URLSearchParams();
		params.append('username', username);
		params.append('password', password);

		return this.http
			.post('/onsight/login', '', {search: params})
			.toPromise()
			.then((response: Response) => {
				let resp = response.json();
				if (!resp.result) {
					return resp.message;
				}

				localStorage.setItem("loggedIn", "true");
			})
			.catch(err => {
				console.error("login: " + err);
				return "Connection error.";
			});
	}

	logout() {
		localStorage.removeItem("loggedIn");
		this.http.post('/onsight/logout', '');
	}

	signup(user: User, password: string): Promise<string | boolean> {
		let params = new URLSearchParams();

		params.append('username', user.username);
		params.append('password', password);
		params.append('name', user.name);
		params.append('family', user.family);

		return this.http
			.post('/onsight/signup', '', {search: params})
			.toPromise()
			.then(response => {
				if (response.json().result)
					return true;
				else
					return response.json().message;
			})
			.catch(err => {
				console.error("signup: " + err);
			});
	}

	getActiveUser(): Promise<User> {
		if (this.isLoggedIn())
			return this.uservice.getActiveUserDetail();
		else
			return null;
	}

	isLoggedIn(): Boolean {
		// TODO: timestamp
		return localStorage.getItem("loggedIn") != null;
	}
}
