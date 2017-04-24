[![Build Status](https://travis-ci.org/lnardai/ng2-auto-save.svg?branch=master)](https://travis-ci.org/lnardai/ng2-auto-save)

# ng2-auto-save

**still in development**

Purpose of this module is to provide an **angular2 directive**, 
which is able to save user input to the Local Storage automatically, and reload it, 
if something happens to the current page. The save is triggered on the user keyup-event, and debounced to save on resources.
The user must provide a unique identifier for their content.

Later I'll try to provide a way to configure, so you can save to Session storage,
if it's sensitive data.

### example


This should survive page reload, browser close, etc...
```
<div> 
<textarea placeholder="{{hint}}"
          auto-save [(asdata)]="textData"
          ng-model-options="{debounce: 500}"
          (reloadData)="setText($event)"
          askey="unique127"
          [(ngModel)]="textData"></textarea>
</div>
```

Parameter description:

**auto-save:** directive itself, accepts 2 parameters as @Input, and one @Output

**askey:** @Input, needs to be a unique key, otherwise overwrites could happen.

**asdata:** @Input, should be the model you keep modifying by the component

**reloadData:** @Output, handler function to restore your data after viewInit


### Demo

You can run the component on your local machine. You'll need nodejs 7.x, angular-cli.

to start the demo page:

`npm install`

`ng serve`

browse to the app: `http://localhost:4200`


### Unit test

`ng test`
