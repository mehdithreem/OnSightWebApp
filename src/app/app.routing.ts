import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";
import {SignupComponent} from "./signup/signup.component";
import {HomeComponent} from "./home/home.component";
import {AuthenticationGuard} from "./authentication-guard.service";

const routes: Routes = [
	{path: 'signup', component: SignupComponent, data: { title: 'Create Account | OnSight'}},
	{path: 'login', component: LoginComponent, data: { title: 'Login | OnSight'}},
	{path: 'logout', redirectTo: '/login', pathMatch: 'full'},
	{path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard], data: { title: 'Dashboard | OnSight'}},
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	// {path: '**', component: PageNotFound}
];

@NgModule({
	providers: [ AuthenticationGuard ],
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
})

export class AppRoutingModule {}
