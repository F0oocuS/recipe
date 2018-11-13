import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	loadedFeature = 'recipe';

	ngOnInit() {
		/*firebase.initializeApp({
			apiKey: 'AIzaSyCCTMnf84p7u5h_xPoBQI_3f_AiP48YuKk',
			authDomain: 'recipe-book-e14ef.firebaseapp.com'
		});*/
	}

	onNavigate(feature: string) {
		this.loadedFeature = feature;
	}
}
