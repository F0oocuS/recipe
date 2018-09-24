import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
	selector: '[appBold]'
})

export class BoldDirective implements OnInit {
	@Input() selectedSize = '18px';
	@Input() defaultSize = '16px';

	private fontSize: string;
	private fontWeight = 'normal';

	ngOnInit() {
		this.fontSize = this.defaultSize;
	}

	constructor() {}

	@HostBinding('style.fontSize') get getFontSize() {
		return this.fontSize;
	}

	@HostBinding('style.fontWeight') get getFontWeight() {
		return this.fontWeight;
	}

	@HostBinding('style.cursor') get getCursor() {
		return 'pointer';
	}

	@HostListener('mouseenter') onMouseEnter() {
		this.fontWeight = 'bold';
		this.fontSize = this.selectedSize;
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.fontWeight = 'normal';
		this.fontSize = this.defaultSize;
	}
}
