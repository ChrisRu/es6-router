# ES6 Router

A simple client side router built in ES6.

## Usage

```js
const router = new Router({ ... })
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

#### constuctor

| Param                  | Type                         | Description                            |
| ---------------------- | ---------------------------- | -------------------------------------- |
| options                | <code>Object</code>          | Options object                         |
| options.debug          | <code>boolean</code> (false) | Enable debugging                       |
| options.context        | <code>Object</code> (window) | Context to add event listener to       |
| options.startListening | <code>boolean</code> (true)  | Start listening when router is created |

<hr>

#### currentRoute ⇒ <code>string</code>

Name of the current route

*Returns*: <code>string</code> - Current route

<hr>

#### add(route, handler) ⇒ <code>Router</code>

Add a new route

| Param   | Type                                       | Description                          |
| ------- | ------------------------------------------ | ------------------------------------ |
| re      | <code>string</code> \| <code>RegExp</code> | Name of route to match               |
| handler | <code>function</code>                      | Method to execute when route matches |

*Returns*: <code>Router</code> - This router instance

<hr>

#### remove(route, [handler]) ⇒ <code>Router</code>

Remove a route from the routerc

| Param     | Type                                       | Description                |
| --------- | ------------------------------------------ | -------------------------- |
| re        | <code>string</code> \| <code>RegExp</code> | Name of route to remove    |
| [handler] | <code>function</code>                      | Function handler to remove |

*Returns*: <code>Router</code> - This router instance

<hr>

#### reload() ⇒ <code>Router</code>

Reload the current route

*Returns*: <code>Router</code> - This router instance

<hr>

#### check() ⇒ <code>Router</code>

Recheck the path and reload the page

*Returns*: <code>Router</code> - This router instance

<hr>

#### listen([instance]) ⇒ <code>Router</code>

Start listening for hash changes on the window

| Param      | Type             | Default             | Description                   |
| ---------- | ---------------- | ------------------- | ----------------------------- |
| [instance] | <code>any</code> | <code>Window</code> | Context to start listening on |

*Returns*: <code>Router</code> - This router instance

<hr>

#### stopListen([instance]) ⇒ <code>Router</code>

Stop listening for hash changes on the window

| Param      | Type             | Default             | Description                  |
| ---------- | ---------------- | ------------------- | ---------------------------- |
| [instance] | <code>any</code> | <code>Window</code> | Context to stop listening on |

*Returns*: <code>Router</code> - This router instance

<hr>

#### navigate(path) ⇒ <code>Router</code>

Navigate router to path

| Param | Type                | Description                    |
| ----- | ------------------- | ------------------------------ |
| path  | <code>string</code> | Path to navigate the router to |

*Returns*: <code>Router</code> - This router instance

<hr>

#### navigateError(hash) ⇒ <code>Router</code>

Navigate to the error page

| Param | Type                |
| ----- | ------------------- |
| hash  | <code>string</code> |

*Returns*: <code>Router</code> - This router instance

<hr>

#### cleanPath(path) ⇒ <code>string</code>

Strip the path of slashes and hashes

| Param | Type                | Description             |
| ----- | ------------------- | ----------------------- |
| path  | <code>string</code> | Path to clean of hashes |

*Returns*: <code>string</code> - Cleaned path

<hr>

#### parseRoute(path) ⇒ <code>string</code>

Parse a route URL to get all parts

| Param | Type                | Description               |
| ----- | ------------------- | ------------------------- |
| path  | <code>string</code> | Route to split into parts |

*Returns*: <code>string[]</code> - Parts of the url

## License

MIT
