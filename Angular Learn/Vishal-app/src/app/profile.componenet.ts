import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'about-page',
	standalone: true,
	imports: [CommonModule, RouterLink],
	templateUrl: './profile.component.html',
})
export class profileComponent {
	naam = 'Suman Kumari';
}

// export class CounterButtonComponent {

// }