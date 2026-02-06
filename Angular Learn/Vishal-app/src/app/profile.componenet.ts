import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HelloComponent } from './hello.component';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'about-page',
	standalone: true,
	imports: [CommonModule, HelloComponent, RouterLink],
	templateUrl: './profile.component.html',
})
export class profileComponent {
	naam = 'Suman Kumari';
}

// export class CounterButtonComponent {

// }