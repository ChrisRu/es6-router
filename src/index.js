export default class Router {
    constructor(debug = false) {
        this.debug = debug;
        this.routes = [];
    }

    add(re, handler) {
		re = Router.cleanHash(re);

        if (typeof re === 'function') {
            handler = re;
            re = new RegExp('');
        } else if (typeof re === 'string') {
			re = new RegExp(re);
		}
        
        this.routes = this.routes.concat({ re, handler });
        return this;
    }

	remove(re) {
		this.routes = this.routes.filter(route => route.re === re);
	}

    check() {
        const hash = Router.cleanHash(location.hash);

        for (let route of this.routes) {
            const match = hash.match(route.re);
            if (match !== null && match[0] === hash) {
                match.shift();
                route.handler.apply({}, match);
                if (this.debug) {
                    console.log(`%c[Router] %cFetching: /${hash}`, 'color: rgb(255, 105, 100);', 'color: inherit');
                }
                return this;
            }
        }
        this.navigateError();
        return this;
    }

    listen() {
        this.check();
        window.addEventListener('hashchange', () => this.check());
        return this;
    }

	stopListen() {
		window.removeEventListener('hashchange', () => this.check());
		return this;
	}

    navigate(path) {
        if (this.debug) {
            console.log(`%c[Router] %cRedirecting to: /${Router.cleanHash(path || '')}`, 'color: rgb(255, 105, 100);', 'color: inherit');
        }
        history.pushState(null, null, '#/' + Router.cleanHash(path || ''));
        return this;
    }

    navigateError() {
        if (this.debug) {
            console.log(`%c[Router] Failed %cFetching: /${hash}, not a valid route.`, 'color: rgb(255, 105, 100);', 'color: inherit');
        }
        this.navigate('error');
    }

    get currentPage() {
        return Router.cleanHash(location.hash);
    }

    static cleanHash(path) {
        if (path === undefined) {
            return '';
        }
        return path.toString().replace(/^#+\/+|^\/+#+|^\/+|^#+|\/+$|\?(.*)$/g, '');
    }
}
