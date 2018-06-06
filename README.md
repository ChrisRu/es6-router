# ES6 Router

[![Licence](https://img.shields.io/github/license/ChrisRu/es6-router.svg)](https://github.com/ChrisRu/es6-router/blob/master/LICENSE.md)
[![Tests](https://circleci.com/gh/circleci/mongofinil.svg?&style=shield&circle-token=b14acf911433d315298235b0c2fbf7b2670a92a8)](https://circleci.com/gh/ChrisRu/es6-router)

A simple client side router built in ES6. This library works with IE11, because it ships a polyfill for custom events.

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

_Returns_: <code>string</code> - Current route

<hr>

#### add(route, handler) ⇒ <code>Router</code>

Add a new route

| Param   | Type                                       | Description                          |
| ------- | ------------------------------------------ | ------------------------------------ |
| re      | <code>string</code> \| <code>RegExp</code> | Name of route to match               |
| handler | <code>function</code>                      | Method to execute when route matches |

_Returns_: <code>Router</code> - This router instance

<hr>

#### remove(route, [handler]) ⇒ <code>Router</code>

Remove a route from the routerc

| Param     | Type                                       | Description                |
| --------- | ------------------------------------------ | -------------------------- |
| re        | <code>string</code> \| <code>RegExp</code> | Name of route to remove    |
| [handler] | <code>function</code>                      | Function handler to remove |

_Returns_: <code>Router</code> - This router instance

<hr>

#### reload() ⇒ <code>Router</code>

Reload the current route

_Returns_: <code>Router</code> - This router instance

<hr>

#### listen([instance]) ⇒ <code>Router</code>

Start listening for hash changes on the window

| Param      | Type             | Default             | Description                   |
| ---------- | ---------------- | ------------------- | ----------------------------- |
| [instance] | <code>any</code> | <code>Window</code> | Context to start listening on |

_Returns_: <code>Router</code> - This router instance

<hr>

#### stopListen([instance]) ⇒ <code>Router</code>

Stop listening for hash changes on the window

| Param      | Type             | Default             | Description                  |
| ---------- | ---------------- | ------------------- | ---------------------------- |
| [instance] | <code>any</code> | <code>Window</code> | Context to stop listening on |

_Returns_: <code>Router</code> - This router instance

<hr>

#### navigate(path) ⇒ <code>Router</code>

Navigate router to path

| Param | Type                | Description                    |
| ----- | ------------------- | ------------------------------ |
| path  | <code>string</code> | Path to navigate the router to |

_Returns_: <code>Router</code> - This router instance

<hr>

#### navigateError(hash) ⇒ <code>Router</code>

Navigate to the error page

| Param | Type                |
| ----- | ------------------- |
| hash  | <code>string</code> |

_Returns_: <code>Router</code> - This router instance

<hr>

#### cleanPath(path) ⇒ <code>string</code>

Strip the path of slashes and hashes

| Param | Type                | Description             |
| ----- | ------------------- | ----------------------- |
| path  | <code>string</code> | Path to clean of hashes |

_Returns_: <code>string</code> - Cleaned path

<hr>

#### parseRoute(path) ⇒ <code>string</code>

Parse a route URL to get all parts

| Param | Type                | Description               |
| ----- | ------------------- | ------------------------- |
| path  | <code>string</code> | Route to split into parts |

_Returns_: <code>string[]</code> - Parts of the url

## License

MIT
