import {Component, OnInit} from "@angular/core";
import {AuthenticationService} from "../_services/authentication.service";
import {Router} from "@angular/router";
import {User} from "../_model/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
	errorMessage: string;
	loading: boolean;
	signupForm: FormGroup;

	constructor(
		private auth: AuthenticationService,
		private router: Router,
		public fb: FormBuilder
	) {
		this.signupForm = this.fb.group({
			name: '',
			family: '',
			username: ['', Validators.required],
			password: ['', Validators.required],
			repassword: ['', Validators.required]
		}, {validator: this.matchingPasswords('password', 'repassword')});
	}

	ngOnInit() {
	}

	matchingPasswords(passwordKey: string, repasswordKey: string) {
		return (group: FormGroup): {[key: string]: any} => {
			let password = group.controls[passwordKey];
			let repassword = group.controls[repasswordKey];

			if (password.value !== repassword.value) {
				return {
					mismatchedPasswords: true
				};
			}
		}
	}

	signup() {
		this.auth.signup(new User(this.signupForm.value.username, this.signupForm.value.name, this.signupForm.value.family), this.signupForm.value.password)
			.then(message =>{
				if (message === true)
					this.router.navigate(['/login']);
				else {
					this.errorMessage = message.toString();
					this.signupForm.controls.password.reset("");
					this.signupForm.controls.repassword.reset("");
				}
			});
	}

}
