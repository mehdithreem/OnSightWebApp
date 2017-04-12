import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import {AuthenticationService} from "./_services/authentication.service";
import { LoginComponent } from './login/login.component';
import {UserService} from "./_services/user.service";
import {AppRoutingModule} from "./app.routing";
import { SignupComponent } from './signup/signup.component';

@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
		LoginComponent,
		SignupComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		AppRoutingModule
	],
	providers: [
		AuthenticationService,
		UserService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
