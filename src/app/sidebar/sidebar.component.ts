import {Component, OnInit} from "@angular/core";
import {ITEMS} from "./sidebar.items-config";
import {AuthenticationService} from "../_services/authentication.service";
import {Router} from "@angular/router";
import {User} from "../_model/user";

declare let $: any;

@Component({
	selector: 'sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
	public menuItems: any[];

	constructor(private auth: AuthenticationService,
				private router: Router) {
	}

	ngOnInit() {
		$.getScript('../../assets/js/material-dashboard-angular.js');
		this.auth.getActiveUser().then( user => {
			this.menuItems = ITEMS.filter(menuItem => {
				for (let role in user.roles) {
					if (role in menuItem.access)
						return true;
				}
				return false;
			});
		});
	}

}
