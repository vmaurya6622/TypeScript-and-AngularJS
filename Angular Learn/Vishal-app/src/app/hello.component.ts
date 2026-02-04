import { Component, Input, Output,EventEmitter } from '@angular/core';


// template: `<p>Hello {{ name }} from child!</p>
//                <button (click)="increment()">Increment by {{step}}</button>
//                <p>Count: {{count}}</p>
               
//                <div style="border:2px solid black; padding:10px; margin-top:10px;">
//                 <ng-content></ng-content>
//                </div>
//                `,


@Component({
    selector: 'hello-comp',
    standalone: true,
    template: `<p>Hello {{ name }} from child!</p>
                <button (click)="increment()">Increment by {{step}}</button>
                <p>Count: {{count}}</p>              
                <div style="border:2px solid black; padding:10px; margin-top:10px;">
                <ng-content></ng-content>
                </div>
                `,
})
export class HelloComponent {
    @Input() name: string = '';

    @Input() step: number = 1;
    @Output()
    clicked = new EventEmitter<number>();

    count=0;
    increment(){
        this.count+=this.step;
        this.clicked.emit(this.count);
    }
}

// export class CounterButtonComponent {
   
// }