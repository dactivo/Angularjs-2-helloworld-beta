/// <reference path="../../../node_modules/angular2/angular2.d.ts"/>

import {bootstrap} from 'angular2/platform/browser'
import{Component} from 'angular2/core'

@Component({
	selector:'my-app',
	template: '<h1> Angular2 hello world</h1>'
})

class AppComponent
{}

bootstrap(AppComponent).then(
    success => console.log(success),
    error => console.log(error)
);

