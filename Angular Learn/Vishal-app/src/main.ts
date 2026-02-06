import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { App } from './app/app';
import { Component } from '@angular/core';
/*
	-> {{name}} this is used for interpolation
	-> (event) this is used for event binding
	-> [property] this is used for property binding or to set an element property
	-> (error) event binding for an error event
	-> #box: its a template reference variable
	-> box.value: it inputs the current input value.
	-> *ngFor ... index as i : this is structural directive to loop with zero based indexing.	
*/
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  	.catch(err => console.error(err));
