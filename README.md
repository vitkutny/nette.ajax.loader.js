# Loader extension

This extension for [nette.ajax.js](https://github.com/vojtech-dobes/nette.ajax.js) provides helper classes which could be used for request processing indication and highlighting of redrawed content.

## Installation
Put `nette.ajax.loader.js` script beetween including `nette.ajax.js` and initialization call `$.nette.init();`

## Options
```javascript
$.nette.ext('loader').element = document.documentElement;
```
 - Element where `loader.start` class will be present
```javascript
$.nette.ext('loader').start = 'loading';
```
 - Class which will be present when ajax request starts on `loader.element` and element used to fire this request
```javascript
$.nette.ext('loader').complete = 'loaded';
```
 - Class which will be present on every redrawed snippet for `loader.timeout` amount of time when ajax request completes
```javascript
$.nette.ext('loader').timeout = 100;
```
 - Time to `loader.complete` class to disappear
