import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import {AuthenticationService} from "./_services/authentication.service";
import { LoginComponent } from './login/login.component';
import {UserService} from "./_services/user.service";
import {AppRoutingModule} from "./app.routing";

@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
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
