import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";
import {SignupComponent} from "./signup/signup.component";

const routes: Routes = [
	{path: 'signup', component: SignupComponent, data: { title: 'Create Account | OnSight'}},
	{path: 'login', component: LoginComponent, data: { title: 'Login | OnSight'}},
	// {path: 'home', component: HomeComponent},
	{path: '', redirectTo: '/login', pathMatch: 'full'},
	// {path: '**', component: PageNotFound}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
})

export class AppRoutingModule {}
