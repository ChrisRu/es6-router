/**
 * Client side router with hash history
 */
export default class Router {
  /**
   * Create a new instance of a client side router
   * @param options Router configuration
   * @param [options.debug] - Enable debugging console messages
   * @param [options.context] - Context to listen for changes on
   * @param [options.startListening] - Initiate listen on construct
   */
  constructor(options?: {
    debug?: boolean;
    context?: any;
    startListening?: boolean;
  });

  /**
   * Add a new route
   * @param route - Name of route to match or global function
   * @param handler - Method to execute when route matches
   * @returns This router instance
   */
  add<T extends string | RegExp | Function>(
    route: T extends Function ? Function : string | RegExp,
    handler?: T extends Function ? (...args: any[]) => any : undefined
  ): this;

  /**
   * Remove a route from the router
   * @param route - Name of route to remove
   * @param handler - Function handler to remove
   * @returns This router instance
   */
  remove(route: string | RegExp, handler?: (...args: any[]) => any): this;

  /**
   * Reload the current route
   * @returns This router instance
   */
  reload(): this;

  /**
   * Recheck the path and reload the page
   * @returns This router instance
   */
  private check(): this;

  /**
   * Start listening for hash changes on the context
   * @param instance - Context to start listening on
   * @returns This router instance
   */
  listen(instance?: any): this;

  /**
   * Stop listening for hash changes on the context
   * @param instance - Context to stop listening on
   * @returns This router instance
   */
  stopListen(instance?: any): this;

  /**
   * Navigate router to path
   * @param path - Path to navigate the router to
   * @returns This router instance
   */
  navigate(path: string): this;

  /**
   * Name of the current route
   */
  currentRoute: string;

  /**
   * Strip the path of slashes and hashes
   * @param path - Path to clean of hashes
   * @returns Cleaned path
   */
  static cleanPath(path: string): string;

  /**
   * Parse a route URL to get all parts
   * @param path - Route to split into parts
   * @returns Parts of the URL
   */
  static parseRoute(path: string): string[];

  /**
   * Whether the router instance is actively listening for route changes
   * @type {boolean}
   * @memberof Router
   */
  isListening: boolean;
}
