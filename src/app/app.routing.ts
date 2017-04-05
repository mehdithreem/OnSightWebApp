import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
	{path: 'login', component: LoginComponent},
	// {path: 'signup', component: SignupComponent, data: { title: 'Create Account | OnSight'}},
	// {path: 'home', component: HomeComponent},
	// {path: '', redirectTo: '/home', pathMatch: 'full'},
	// {path: '**', component: PageNotFound}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
})

export class AppRoutingModule {}
