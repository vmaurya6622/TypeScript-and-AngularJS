import { OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

export class Demo implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('box') box!: ElementRef<HTMLInputElement>;
    intervalId: any;
    ngOnInit() { /* setup after inputs */ }
    ngAfterViewInit() { this.box.nativeElement.focus(); }
    ngOnDestroy() { clearInterval(this.intervalId); }
}
export class child implements OnInit,OnDestroy{
    intervalId: any;
    ngOnInit(): void {
        this.intervalId = setInterval(()=>{/*....*/}, 1000);
    }
    ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }
}