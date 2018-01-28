# ES6 Router
A simple client side router built in ES6.

## Usage
```js
const router = new Router()
	.add(() => {
		// getPage('/');
	})
	.add(/about/, () => {
		// getPage('about');
	})
	.add('contact', () => {
		// getPage('contact');
	});

router.remove('contact');
router.navigate('about');
```

## API

### Members

<dl>
<dt><a href="#currentRoute">currentRoute</a> ⇒ <code>string</code></dt>
<dd><p>Name of the current route</p>
</dd>
</dl>

### Functions

<dl>
<dt><a href="#add">add(route,  handler)</a> ⇒ <code>Router</code></dt>
<dd><p>Add a new route</p>
</dd>
<dt><a href="#remove">remove(route,  [handler])</a> ⇒ <code>Router</code></dt>
<dd><p>Remove a route from the router</p>
</dd>
<dt><a href="#reload">reload()</a> ⇒ <code>Router</code></dt>
<dd><p>Reload the current route</p>
</dd>
<dt><a href="#check">check()</a> ⇒ <code>Router</code></dt>
<dd><p>Recheck the path and reload the page</p>
</dd>
<dt><a href="#listen">listen([instance])</a> ⇒ <code>Router</code></dt>
<dd><p>Start listening for hash changes on the window</p>
</dd>
<dt><a href="#stopListen">stopListen([instance])</a> ⇒ <code>Router</code></dt>
<dd><p>Stop listening for hash changes on the window</p>
</dd>
<dt><a href="#navigate">navigate(path)</a> ⇒ <code>Router</code></dt>
<dd><p>Navigate router to path</p>
</dd>
<dt><a href="#navigateError">navigateError(hash)</a> ⇒ <code>Router</code></dt>
<dd><p>Navigate to the error page</p>
</dd>
<dt><a href="#cleanPath">cleanPath(path)</a> ⇒ <code>string</code></dt>
<dd><p>Strip the path of slashes and hashes</p>
</dd>
</dl>

<a name="currentRoute"></a>

### currentRoute ⇒ <code>string</code>
Name of the current route

**Kind**: global variable  
**Returns**: <code>string</code> - Current route  
<a name="add"></a>

### add(route,  handler) ⇒ <code>Router</code>
Add a new route

**Kind**: global function  
**Returns**: <code>Router</code> - This router instance  

| Param | Type | Description |
| --- | --- | --- |
| re | <code>string</code> \| <code>RegExp</code> | Name of route to match |
| handler | <code>function</code> | Method to execute when route matches |

<a name="remove"></a>

### remove(route,  [handler]) ⇒ <code>Router</code>
Remove a route from the router

**Kind**: global function  
**Returns**: <code>Router</code> - This router instance  

| Param | Type | Description |
| --- | --- | --- |
| re | <code>string</code> \| <code>RegExp</code> | Name of route to remove |
| [handler] | <code>function</code> | Function handler to remove |

<a name="reload"></a>

### reload() ⇒ <code>Router</code>
Reload the current route

**Kind**: global function  
**Returns**: <code>Router</code> - This router instance  
<a name="check"></a>

### check() ⇒ <code>Router</code>
Recheck the path and reload the page

**Kind**: global function  
**Returns**: <code>Router</code> - This router instance  
<a name="listen"></a>

### listen([instance]) ⇒ <code>Router</code>
Start listening for hash changes on the window

**Kind**: global function  
**Returns**: <code>Router</code> - This router instance  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [instance] | <code>any</code> | <code>Window</code> | Context to start listening on |

<a name="stopListen"></a>

### stopListen([instance]) ⇒ <code>Router</code>
Stop listening for hash changes on the window

**Kind**: global function  
**Returns**: <code>Router</code> - This router instance  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [instance] | <code>any</code> | <code>Window</code> | Context to stop listening on |

<a name="navigate"></a>

### navigate(path) ⇒ <code>Router</code>
Navigate router to path

**Kind**: global function  
**Returns**: <code>Router</code> - This router instance  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Path to navigate the router to |

<a name="navigateError"></a>

### navigateError(hash) ⇒ <code>Router</code>
Navigate to the error page

**Kind**: global function  
**Returns**: <code>Router</code> - This router instance  

| Param | Type |
| --- | --- |
| hash | <code>string</code> | 

<a name="cleanPath"></a>

### cleanPath(path) ⇒ <code>string</code>
Strip the path of slashes and hashes

**Kind**: global function  
**Returns**: <code>string</code> - Cleaned path  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Path to clean of hashes |

## License
MIT