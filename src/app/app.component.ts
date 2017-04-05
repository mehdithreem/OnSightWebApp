import {Component, OnInit} from "@angular/core";
import {PlatformLocation} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AuthenticationService} from "./_services/authentication.service";

declare let $:any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [RouterModule]
})

export class AppComponent implements OnInit {

	ngOnInit(): void {
		$.getScript('../assets/js/material-dashboard.js');
		$.getScript('../assets/js/initMenu.js');
	}

	constructor(location: PlatformLocation, private auth: AuthenticationService) {

		location.onPopState(() => {
			// $('.sidebar-wrapper .nav-container div').removeClass('.moving-tab');
			// $.getScript('../assets/js/material-dashboard-angular.js');
			console.log('pressed back!');
		});

	}
}
