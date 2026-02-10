// error handling with HttpClient
/*
    -> it shows a helpful message when the request fails and allows retrying the request. 
    -> it checks status code to decide retry vs fail fast.
    -> it keeps the UI responsive with a loading flag. 
*/
import { bootstrapApplication } from '@angular/platform-browser';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { provideHttpClient, HttpClient, withInterceptors, HttpResponse, HttpErrorResponse, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { of, throwError } from 'rxjs';

// import { CommonModule } from "@angular/common";
// import { HttpClient, HttpErrorResponse, HttpHandler, HttpHandlerFn, HttpRequest, HttpResponse } from "@angular/common/http";
// import { Component } from "@angular/core";
// import { of, throwError } from "rxjs";

export function mockHTTPClient(req: HttpRequest<any>, next: HttpHandlerFn) {
    if (req.method === 'GET' && req.url.includes('jsonplaceholder.typicode.com/usersx')) {
        return throwError(() => new HttpErrorResponse({ status: 404, statusText: 'you requested wrong url.', url: req.url }));
    }
    // if (req.method === 'GET' && req.url.includes('jsonplaceholder.typicode.com/users')) {
    //     const body = [
    //         { id: 1, name: 'vishal maurya', email: 'leavemealone@gmail.com' },
    //         { id: 2, name: 'Anish Rawat', email: 'anish.rawat@example.com' }
    //     ]
    //     return of(new HttpResponse({ status: 200, body }));
    // }
    return next(req);
}
@Component({
    selector: 'app-http-demo',
    standalone: true,
    imports: [CommonModule],
    template: `
        <h3>HTTP Error Handling</h3>
        <div>
            <button (click)="loadOk()" [disabled]="loading">Load Users (OK)</button>
            <button (click)="loadFail()" [disabled]="loading">Load Users (Fail)</button>
            <button (click)="retry()" [disabled]="!lastAction">Retry</button>
        </div>
        <p *ngIf="loading">Loading...</p>
        <p *ngIf="error" class="error">{{ error }}</p>
        <p *ngIf="!error && data" class="ok">Loaded {{ isArrayLike(data) ? data.length + ' items' : '1 item' }}</p>
        <ul *ngIf="isArrayLike(data)">
        <li *ngFor="let u of data">{{ u.name }} ({{ u.email }})</li>
        </ul>
        `
})
export class HttpDemoComponent {
    http = inject(HttpClient);
    loading = false;
    // loadingFail = false;
    error = ''
    data: any[] | null = null;
    lastAction = '';
    cd = inject(ChangeDetectorRef);
    isArrayLike(value: unknown): value is any[] { return Array.isArray(value as any); }
    fetch(url: string): void {
        this.loading = true;
        this.error = '';
        this.data = null;
        this.http.get<any[]>(url).subscribe({
            next: (res) => { this.data = res; this.loading = false; this.cd.detectChanges(); },
            error: (err) => {
                this.error = `Request failed (status ${err.status}), please try again later.`;
                this.loading = false;
                this.cd.detectChanges();
            }
        });
    }

    loadOk() {
        this.lastAction = 'ok';
        this.fetch('https://jsonplaceholder.typicode.com/users');
    }
    loadFail() {
        this.lastAction = 'fail';
        this.fetch('https://jsonplaceholder.typicode.com/usersx');
    }
    retry() {
        if (this.lastAction === 'ok') this.loadOk();
        else if (this.lastAction === 'fail') this.loadFail();
    }
}

/*
    Real apps me backend bolta hai:
        “Bhai, har request ke saath token bhejo, warna data nahi milega.”

    Token ka matlab:
        user logged-in hai?
        usko data access karne ka right hai?
    ye function har HTTP request ke beech me chalega and token ko check karega,
    agar token valid hai to request aage badhegi, warna error throw karega.

    adding to that, agar token expire ho gaya hai to hum backend se ek 
    specific error code (e.g., 401 Unauthorized) milta hai, jisko dekh kar hum
    user ko login page pe redirect kar sakte hain ya token refresh karne ki koshish kar sakte hain.

    kyuki requests immutable hote hain, hum unko modify nahi kar sakte, isliye 
    hum unko clone karte hain aur headers me token add kar dete hain.
*/
export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const cloned = req.clone({ // requests are immutable so we need to clone it to modify it further.
        setHeaders: {
            Authorization: 'Bearer fake-jwt-token'
        }
    });
    return next(cloned);
}