[![Build Status](https://travis-ci.org/lnardai/ng2-auto-save.svg?branch=master)](https://travis-ci.org/lnardai/ng2-auto-save)

# ng2-auto-save

**still in development**

Purpose of this module is to provide an **angular2 directive**, 
which is able to save user input to the Local Storage automatically, and reload it, 
if something happens to the current page. The save is triggered on the user keyup-event, and debounced to save on resources.
The user must provide a unique identifier for their content.

Later I'll try to provide a way to configure, so you can save to Session storage,
if it's sensitive data.

###example


This should survive page reload, browser close, etc...
```
<div> 
	<texarea [auto-save]="blog-article-112351">
	Hey guys, 
	I'm writing this extremly important text, it would be the shame 
	if this would get lost.
	</textarea>
</div>
```
