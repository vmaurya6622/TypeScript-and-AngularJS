import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	standalone: true,
	imports:[CommonModule],
	templateUrl: './app.html',
	styleUrls: ['./app.css']
})
export class App { // this will only work when we export this class
	name = 'Angular 20';

	changename() {
		this.name = 'hp got a new name.';
	}

	reversename() {
		this.name = 'ravan was the previous name.';
	}
	

	myfunc(): string{
		let result = 'This is FOR loop Running Now:\n';
		for (let i = 0; i < 5; i++) {
			result += 'value is: ' + i + '\n';
		}
		return result;
	}
	current ='';
	
	loopOutput ='';
	read(val:string){
		const n=Number(val);
		if(isNaN(n)|| n<=0){
			this.loopOutput='Please enter a valid positive number';
			return;
		}
		let result = '';
		for(let i=1;i<n;i++){
			result+=`value is: ${i}\n`;
		}
		this.loopOutput=result;
	}
}
