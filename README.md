# ES6 Router
A simple client side router built in ES6.

## Methods
- `router.add(route, handler)`: Add route
- `router.remove(route)`: Remove route
- `router.listen()`: Start the router
- `router.navigate(path)`: Navigate to path
- `router.check()`: Recheck the URL

- `Router.cleanHash(path)`: Remove the starting and ending slashes from the path

## Usage
``` js
const router = new Router()
	.add(() => {
		// getPage('/');
	})
	.add(/about/, () => {
		// getPage('/about');
	})
	.add(/contact/, () => {
		// getPage('/contact');
	})
	.listen();

router.remove(/contact/);
router.navigate('about');
```

## License
MIT