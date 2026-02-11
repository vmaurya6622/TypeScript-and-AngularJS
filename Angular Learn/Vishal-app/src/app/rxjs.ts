import { AsyncPipe, CommonModule, NgFor, NgIf } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, isStandalone, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { catchError, debounceTime, delay, distinctUntilChanged, from, fromEvent, interval, map, Observable, of, switchMap, throwError } from "rxjs"
@Component({
    selector: 'app-rxjs',
    standalone: true,
    imports: [FormsModule, NgIf, NgFor, AsyncPipe, CommonModule],
    template: `
        <h3>RxJS Demo</h3>
        <h3> Reactive Programming Assignment</h3>
        <button id = "btn" >Click me</button>
        <p> Open console to see RxJS in action. </p>
        <h3> Live search bar using RxJS </h3>
        <input type="text" placeholder="Search..." [(ngModel)]="searchTerm" (ngModelChange)="onSearchTermChange($event)"/>
        <p *ngIf="loading">Loading...</p>
        <p *ngIf="error" style="color:red">{{ error }}</p>
        <ul>
            <li *ngFor="let item of result">{{ item.firstName }} {{item.lastName}}</li>
        </ul>

        <!--Async Pipe demo-->
        <h3>Async Pipe Demo</h3>
        <ul>
            <li *ngFor="let item of users$ | async">{{ item.firstName }} {{item.lastName}}</li>
        </ul>
        <h3> Current Time: {{ currentTime$ | async | date:'mediumTime' }}</h3>
        <h3>Loading List:</h3>
        <ng-container *ngIf="list$ | async as data; else loading">
            <ul>
                <li *ngFor="let item of data">{{ item.name }}</li>
            </ul>
        </ng-container>
        <ng-template #loading>
            <p>Please Wait.. Loading...</p>
        </ng-template>
        `
})
export class RxjsComponent {
    constructor() {
        of('Hello Vishal!').subscribe(x => console.log('of() operator demo: ', x));
        from([3, 4, 5, 22]).subscribe(x => console.log('from() operator demo: ', x));
        throwError(() => new Error('Something went wrong!')).subscribe({
            error: err => console.log('throwError() operator demo: ', err.message)
        });
    }
    ngAfterViewInit() {
        const button = document.getElementById('btn');
        fromEvent(button!, 'click').subscribe(() => console.log('Button clicked!'));
    }
    http1 = inject(HttpClient);
    loading = false;
    result: any[] = [];
    error = '';
    searchTerm = '';
    users$ = this.http1.get<any>('https://dummyjson.com/users').pipe(
        map(res => res.users), // Extract users array from response
        catchError(err => {
            this.error = 'Error fetching users';
            return of({ users: [] }); // Return empty users array on error
        })
    )
    onSearchTermChange(term: string) {
        this.loading = true;
        this.error = '';

        of(this.searchTerm).pipe(
            debounceTime(99999),
            distinctUntilChanged(),
            switchMap(text => {
                if (!text) return of([]); // agar input empty hai to empty array return karo
                return this.http1.get<any>(`https://dummyjson.com/users/search?q=${text}`);
            }),
            catchError(err => {
                this.error = 'Error fetching data';
                return of([]); // Return empty array on error
            })
        ).subscribe(res => {
            console.log('Search Results:', res);
            this.result = res.users; // Handle both array and object responses
            this.loading;
            // console.log(this.loading)
        });
        // ngOnInit() {
        //     this.search$.pipe(
        //         debounceTime(500),
        //         distinctUntilChanged(),
        //         switchMap(text => {
        //             if (!text) return of({ users: [] });
        //             this.loading = true;
        //             return this.http1.get<any>(
        //                 `https://dummyjson.com/users/search?q=${text}`
        //             );
        //         }),
        //         catchError(err => {
        //             this.error = 'Error fetching data';
        //             return of({ users: [] });
        //         })
        //     ).subscribe(res => {
        //         this.result = res.users;
        //         this.loading = false;
        //     });
        // }
    }
    // ----------- example 2 
    currentTime$ = interval(10).pipe(map(() => new Date()));

    // ------------ example 3
    list$ = of([{
        name: 'vishal'
    }, {
        name: 'kumar'
    }, {
        name: 'RxJS demo'
    }]).pipe(delay(20000)); //delay of 20 seconds to simulate loading
}
function ngOnInit() {
    throw new Error("Function not implemented.");
}

