import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
	selector: '[appBold]',
	host: {
		'(mouseenter)': 'onMouseEnter()',
		'(mouseleave)': 'onMouseLeave()'
	}
})

export class BoldDirective {
	constructor(private element: ElementRef, private render: Renderer2) {
		this.render.setStyle(this.element.nativeElement, 'cursor', 'pointer');
	}

	onMouseEnter() {
		this.setFontWeight('bold');
	}

	onMouseLeave() {
		this.setFontWeight('normal');
	}

	setFontWeight(value: string) {
		this.render.setStyle(this.element.nativeElement, 'font-weight', value);
	}
}
