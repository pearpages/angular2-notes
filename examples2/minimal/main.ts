/// <reference path="../node_modules/angular2/typings/browser.d.ts" />

import 'reflect-metadata';
import '../node_modules/es6-shim/es6-shim.js';
import '../node_modules/zone.js/dist/zone.js';
import {bootstrap} from 'angular2/platform/browser';
import {App} from './app';

bootstrap(App).then(
    () => console.log('App running...'),
    err => console.log(err)
);