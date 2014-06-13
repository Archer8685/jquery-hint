Hint v0.2.0
============
##Demos & Examples
[Demos](http://archerproxyserver.appspot.com/jquery-hint/examples/index.html)

## News
13/06/2014:remove initStyle, hintStyle options and add hintClass option.
21/04/2014:release.

## How to Use It
###javascript
``` javascript
$("input, textarea").hint();
```
###html
just add `shuttle_select` in class and set `multiple` to your select.
```
<input type="text"  name="input" value="" hint="typing your name." />
```
```
<textarea rows="8" cols="40" name="textarea" hint="typing your suggest.\n\nThis is text.."></textarea>
```
## API
### Options
- `hintClass` <br/>hint text class.

### Events
- `onFocus` <br/>element focus event.
- `onBlur` <br/>element blur event.

## About
author:Archer Hsieh<br/>
e-mail: kevin8685@gmail.com
