import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './app.html',
	styleUrls: ['./app.css']
})
export class App { // this will only work when we export this class
	name = 'Angular 20';
	ok = true; // i made this to check for ngIf directive
	items = ['apple', 'banana', 'mango', 'orange', 'grapes']; // i made this to check for ngFor directive
	trackByFn(index: number, item: string) {
		return item; ''
	}

	counterForTemplateStatements = 55;

	alertType: 'info' | 'warning' | 'success' = 'info';
	alertMsg = 'This is a template message'; // i made this to check for ngTemplate directive

	user?: {
		name?: string
		mobile?: string

		profile?: {
			email?: string;
			age?: number;
		};
	};
	toggleUser() {
		this.user = this.user ? undefined :
			{
				name: undefined,
				mobile: '1234567890',
				profile: { email: 'vimaurya@ciena.com', age: 21 }
			};
	}
	changename() {
		this.name = 'hp got a new name.';
	}

	reversename() {
		this.name = 'ravan was the previous name.';
	}


	myfunc(): string {
		let result = 'This is FOR loop Running Now:\n';
		for (let i = 0; i < 5; i++) {
			result += 'value is: ' + i + '\n';
		}
		return result;
	}
	current = '';

	loopOutput = '';
	read(val: string) {
		const n = Number(val);
		if (isNaN(n) || n <= 0) {
			this.loopOutput = 'Please enter a valid positive number';
			return;
		}
		let result = '';
		for (let i = 1; i < n; i++) {
			result += `value is: ${i}\n`;
		}
		this.loopOutput = result;
	}

	// Now writing for $event 
	counterForEvent = 0;
	increment() {
		this.counterForEvent++;
	}
	textForEvent = '';
	updateText(value: string) {
		this.textForEvent = value;
	}

	//for as alias with ngIf
	userDetails:{name:string,age:number} | null = {name:'Vishal', age: 25};
	toggleUserDetails(){
		this.userDetails = this.userDetails ? null : {name:'Vishal',age:25};
	}	

	//for pipes(|)
	sampleString = 'hello angular pipes!';
	amountInINR = 123.789;
	currentDate = new Date()
	ratio = 0.77;
}
