import { bootstrapApplication } from '@angular/platform-browser';
import { Component, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { delay, interval, map, of } from 'rxjs';

@Pipe({name:'customPipe', standalone: true})
export class CustomPipe implements PipeTransform{
    transform(value:string):string {
        if(!value) return '';
        return value.split(/\ /).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }
}

@Component({
    selector: 'app-pipes-demo',
    standalone: true,
    imports: [CommonModule, CustomPipe],
    template: `
        <h3>Angular Pipes</h3>
        <p>{{ title | uppercase }}</p>
        <p>{{ title2 | customPipe }}</p>
        <p>{{ price | currency:'USD' }}</p>
        <p>{{ today | date:'longDate' }}</p>
        <p>{{ percent | percent:'1.0-2' }}</p>

        <!-- Async Pipe -->
        <p> Time: {{time$ | async | date:'mediumTime'}}</p>
        <h4> Users list DELAYED by 5 seconds to demonstrate Async Pipe </h4>
        <button (click)="loadUsers()">Load Users</button>
        <ng-container *ngIf="users$ | async as users; else loading">
        <ul>
            <li *ngFor="let user of users">{{ user.name }}</li>
        </ul>
        </ng-container>
        <ng-template #loading>
            <p>Loading users...</p>
        </ng-template>

    `
})
export class PipesDemoComponent {
    title = 'this is converted into uppercase using uppercase pipe';
    title2 = 'this is converted using custom pipe';
    price = 1234.5;
    today = new Date();
    percent = 0.349445;
    time$ = interval(1000).pipe(map(() => new Date()));
    users$ = of([
        { name: 'vishal' },
        { name: 'Roma'},
        { name: 'Shreya'}]).pipe(delay(5000)); // Simulate delayed data

    loadUsers() {
        this.users$ = of([
            { name: 'vishal' },
            { name: 'Roma'},
            { name: 'Shreya'}
        ]).pipe(delay(5000));
    }
}