import {Component, OnInit} from "@angular/core";
import {AuthenticationService} from "../_services/authentication.service";
import {Router} from "@angular/router";

declare let $:any;

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	username: string;
	password: string;
	errorMessage: string;
	returnUrl: string;
	loading: boolean; // #TODO: loading component

	constructor(
		private auth: AuthenticationService,
		private router: Router
	) {
	}

	ngOnInit() {
		$.getScript('../assets/js/material-dashboard.js');
	}

	login() {
		this.loading = true;

		this.auth.login(this.username, this.password)
			.then(message => {
				if(this.auth.isLoggedIn()) {
					this.router.navigate([this.returnUrl]);
				} else {
					this.errorMessage = message;
					this.password = "";
				}
			});
	}

}
