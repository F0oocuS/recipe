import { Component } from '@angular/core';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.css']
})

export class TestComponent {
	isShow = false;

	toggle() {
		this.isShow = !this.isShow;
	}
}
