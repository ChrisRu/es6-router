function log(message) {
  console.log(
    `%c[Router]%c ${message}`,
    "color: rgb(255, 105, 100);",
    "color: inherit"
  );
}

export default class Router {
  constructor(options) {
    this.options = {
      debug: false,
      context: window,
      startListening: true,
      ...(options || null),
    };

    this.isListening = false;
    this.routes = [];
    this.onHashChange = this.check.bind(this);

    if (this.options.startListening) {
      this.listen();
    }
  }

  add(route, handler) {
    let cleanedRoute =
      typeof route === "string" ? Router.cleanPath(route) : route;
    if (typeof route === "function") {
      handler = route;
      cleanedRoute = "";
    }

    cleanedRoute = new RegExp(cleanedRoute);

    this.routes.push({
      route: cleanedRoute,
      handler,
    });

    return this;
  }

  remove(route, handler) {
    const routeName = String(new RegExp(route));

    this.routes = this.routes.filter(
      (activeRoute) =>
        String(new RegExp(activeRoute.route)) !== routeName ||
        (handler ? activeRoute.handler !== handler : false)
    );

    return this;
  }

  reload() {
    return this.check();
  }

  check() {
    const hash = this.currentRoute;
    let hasMatch = false;

    for (let route of this.routes) {
      const match = hash.match(route.route);

      if (match !== null) {
        match.shift();
        route.handler.apply({}, match);
        hasMatch = true;

        if (this.options.debug) {
          log(`Fetching: /${hash}`);
        }
      }
    }

    if (!hasMatch) {
      this.navigateError(hash);
    }

    return this;
  }

  listen(instance) {
    this.check();

    if (!this.isListening || instance) {
      (instance || this.options.context).addEventListener(
        "hashchange",
        this.onHashChange
      );

      this.isListening = true;
    }

    return this;
  }

  stopListen(instance) {
    if (this.isListening || instance) {
      (instance || this.options.context).removeEventListener(
        "hashchange",
        this.onHashChange
      );

      this.isListening = false;
    }

    return this;
  }

  navigate(path) {
    if (this.options.debug) {
      log(`Redirecting to: /${Router.cleanPath(path || "")}`);
    }

    this.options.context.history.pushState(
      null,
      null,
      "#/" + Router.cleanPath(path || "")
    );

    if (path !== "error") {
      window.dispatchEvent(new CustomEvent("hashchange"));
    }

    return this;
  }

  navigateError(hash) {
    if (this.options.debug) {
      log(`Fetching: /${hash}, not a valid route.`);
    }

    this.navigate("error");

    return this;
  }

  get currentRoute() {
    return Router.cleanPath(this.options.context.location.hash);
  }

  static cleanPath(path) {
    if (!path) {
      return "";
    }

    return String(path).replace(/^[#\/]+|\/+$|\?.*$/g, "");
  }

  static parseRoute(path) {
    return Router.cleanPath(path).split("/");
  }
}
