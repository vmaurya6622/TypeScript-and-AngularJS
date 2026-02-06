import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { HelloComponent } from './hello.component';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
// import it from '@angular/common/locales/extra/it';
// import { CounterButtonComponent } from './hello.component';

type Item = { id: number, name: string }
@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterOutlet],
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
		this.name = 'Mohan was the previous name.';
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
		let result = 'For Loop Output:\n';
		for (let i = 0; i < n; i++) {
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
	userDetails: { name: string, age: number } | null = { name: 'Vishal', age: 25 };
	toggleUserDetails() {
		this.userDetails = this.userDetails ? null : { name: 'Vishal', age: 25 };
	}

	//for pipes(|)
	sampleString = 'hello angular pipes!';
	amountInINR = 123.789;
	currentDate = new Date()
	ratio = 0.74855;

	// Attribute binding
	wide = true;
	get label() {
		return this.wide ? 'Table is wide' : 'Table is narrow';
	}
	toggle() {
		this.wide = !this.wide;
	}

	// TrackBy function 
	itemms: Item[] = [
		{ id: 1, name: "Alpha" },
		{ id: 2, name: "Beta" },
		{ id: 3, name: "Gamma" },
		{ id: 4, name: "Delta" },
		{ id: 5, name: "Epsilon" },
	]
	shuffle() {
		this.itemms = [...this.itemms].reverse();
	}
	trackById(index: number, itemms: Item) {
		return itemms.id;
	}

	// @Input componenet
	userName = 'Vishal';  // data is passed to child component via this property

	//@Output component
	lastCount = 0;
	onChildClicked(n: number) {
		this.lastCount = n;
	}

	// Angular events
	count = '';
	lastKey = '';
	onInput(e: Event) {
		this.count = (e.target as HTMLInputElement).value;
	}
	ctr = 21;
	addvalues() {
		this.ctr += 10;
	}

	//Debounced Input Example
	immediate = ''
	debounced = ''
	private debounceTimer: any;
	onDebouncedInput(e: Event) {
		const v = (e.target as HTMLInputElement)?.value ?? '';
		this.immediate = v;
		clearTimeout(this.debounceTimer);
		this.debounceTimer = setTimeout(() => this.debounced = v, 400);
	}

	//Angular Conditionals
	conditionalBool = true;
	toggleConditional() {
		this.conditionalBool = !this.conditionalBool;
	}
	//Angular Switch Case
	switchValue = 'warning'; // this we can change between 'info','warning','error' and default message types.
	changeSwitchValue(val: string) {
		this.switchValue = val;
	}
	//signal is a reactive variable in angular that tells angular to re-render the component when its value changes.
	//normally boolean varible's value is not accessible to angular but signal makes it accessible.

	// Now we are going to learn angular lists
	AngularList = ["Mango", "Banana", "Orange", "Grapes", "Pineapple"];
	addItem() {
		this.AngularList.push("New Fruit " + (this.AngularList.length + 1));
	}
	removeItem() {
		this.AngularList.pop();
	}
	clearList() {
		this.AngularList = [];
	}

	//list with track
	AngularListWithTrack = signal([
		{ id: 1, name: 'rahul' },
		{ id: 2, name: 'vansh' },
		{ id: 3, name: 'sachin' },
	])
	renameFirst() {
		this.AngularListWithTrack.update(a => a.map((it, i) => i === 0 ? { ...it, name: it.name + ' updatedName' } : it));
	}
	//Fisher–Yates Shuffle Algorithm
	nextIdtobeInserted = 4;
	shuffleList() {
		this.AngularListWithTrack.update(a => {
			const copy = [...a];
			for (let i = copy.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));  // gives values between 0 to i
				[copy[i], copy[j]] = [copy[j], copy[i]]; // this is swapping syntax
			} return copy;
		});
	}
	addListItem() {
		this.AngularListWithTrack.update(a => [...a, { id: this.nextIdtobeInserted++, name: 'New Sonam' }]);
	}
	SortByIdAsc() {
		this.AngularListWithTrack.update(a => [...a].sort((x, y) => x.id - y.id));
	}
	SortByIdDsc() {
		this.AngularListWithTrack.update(a => [...a].sort((x, y) => y.id - x.id));
	}

	// now Filter and Sort

	Formname = '';
	submitted = false;
	onSubmit() {
		this.submitted = true;
	}

	//  Angular Forms
	model = {
		email: '', bio: '', agree: false, pet: '', color: '', size: '', tags: ''
	}

	//Manual two way binding
	age: number | null = null; // using union type so age ya toh number ho sakta hai ya phir null but default NULL
	onAgeChange(value: number) {
		this.age = value;
	}

	//File management
	selectedFile: File[] = []; // this is an array of file objects and initially no file is selected that's why it's empty.
	onFiles(event: Event) {
		const input = event.target as HTMLInputElement;
		if (!input.files) return;
		this.selectedFile = Array.from(input.files);
		this.selectedFile.forEach(file => {
			console.log(`File name: ${file.name}, size: ${file.size} bytes`);
		});
	}

	//Reactive Forms
	fb = new FormBuilder();
	submittedReactive = false;
	form = this.fb.group({
		name: ['', [Validators.required, Validators.minLength(3)]],
		email: ['', [Validators.required, Validators.email]],
		newsletter: [false],
	});

	onSubmitReactive() {
		this.submittedReactive = true;
		if (this.form.valid) {
			console.log(this.form.value);
		}
	}

}
