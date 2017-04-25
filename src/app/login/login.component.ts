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
	loading: boolean; // #TODO: loading component

	constructor(
		private auth: AuthenticationService,
		private router: Router
	) {
	}

	ngOnInit() {
		$.getScript('../assets/js/material-dashboard.js');
		this.auth.logout();
	}

	login() {
		this.loading = true;

		this.auth.login(this.username, this.password)
			.then(message => {
				if (this.auth.isLoggedIn()) {
					console.log(this.auth.redirectUrl);
					if (this.auth.redirectUrl)
						this.router.navigate([this.auth.redirectUrl]);
					else
						this.router.navigate(['/']);
				} else {
					this.errorMessage = message;
					this.password = "";
				}
			});
	}

}
