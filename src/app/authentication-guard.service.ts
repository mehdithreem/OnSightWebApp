/**
 * Created by mehdithreem on 4/25/2017 AD.
 */
import {Injectable} from '@angular/core';
import {
	CanActivate,
	Router,
	ActivatedRouteSnapshot,
	RouterStateSnapshot
} from '@angular/router';
import {AuthenticationService} from './_services/authentication.service';


@Injectable()
export class AuthenticationGuard implements CanActivate {
	constructor(private authService: AuthenticationService, private router: Router) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		console.log(state.url);
		if (!this.authService.isLoggedIn()) {
			this.authService.redirectUrl = state.url;
			this.router.navigate(['/login']);

			return false;
		}

		return true;
	}

}
