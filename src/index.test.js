import Router from './index';

test('Simple routing setup', () => {
  const router = new Router();

  router
    .add(() => {})
    .add('home', () => {});

  window.location.hash = 'home';

  expect(router.currentRoute).toEqual('home');
});

test('Simple routing setup with navigate', () => {
  const router = new Router();

  router
    .add(() => {})
    .add('home', () => {});

  window.location.hash = 'home';

  router.navigate('');

  expect(router.currentRoute).toEqual('');
});

test('Routing add', () => {
  const method = () => {};
  const router = new Router();

  router.add('home', method);

  expect(router.routes[0].route).toEqual(/home/);
  expect(router.routes[0].handler).toEqual(method);
});

test('Routing remove', () => {
  const router = new Router();

  router.add('home', () => {});
  router.remove('home');

  expect(router.routes[0]).toBeUndefined();
});

test('Routing remove wrong', () => {
  const router = new Router();

  router.add('home', () => {});
  router.remove('hom');

  expect(router.routes[0].route).toEqual(/home/);
});

test('Routing remove method', () => {
  const method = () => {};
  const router = new Router();

  router.add('home', method);
  router.remove('home', method);

  expect(router.routes[0]).toBeUndefined();
});

test('Routing remove wrong method', () => {
  const method = () => 1;
  const router = new Router();

  router.add('home', method);
  router.remove('home', () => 2);

  expect(router.routes[0]).toBeDefined();
});

test('Routing remove multiple', () => {
  const router = new Router();

  router.add('test', () => 1);
  router.add('home', () => 2);
  router.add('last', () => 3);
  router.remove('home');

  expect(router.routes[0].route).toEqual(/test/);
  expect(router.routes[1].route).toEqual(/last/);
});

test('Reload', () => {
  const router = new Router();

  let i = 0;

  router.add('test', () => {});
  router.add('home', () => {});
  router.add('last', () => {
    i = 3;
  });

  window.location.hash = '/last';

  expect(i).toEqual(0);

  router.reload();

  expect(i).toEqual(3);
});

test('StopListen', () => {
  const router = new Router();

  let i = 0;

  router.add('home', () => {
    i = 1
  });
  router.add('last', () => {
    i = 2;
  });

  Object.defineProperty(window.location, 'hash', {
    writable: true,
    value: '#/home'
  });
  const homeHashChangeEvent = new Event('hashchange');
  window.dispatchEvent(homeHashChangeEvent);

  expect(i).toEqual(1);

  router.stopListen();

  Object.defineProperty(window.location, 'hash', {
    writable: true,
    value: '#/last'
  });
  const lastHashChangeEvent = new Event('hashchange');
  window.dispatchEvent(lastHashChangeEvent);

  expect(i).toEqual(1);
});

test('Do not init listen on construct', () => {
  let i = 0;

  const router = new Router({ startListening: false });
  router.add(() => {
    i = 1;
  });

  Object.defineProperty(window.location, 'hash', {
    writable: true,
    value: '#/'
  });
  const firstHashChangeEvent = new Event('hashchange');
  window.dispatchEvent(firstHashChangeEvent);

  expect(i).toEqual(0);

  router.listen();

  Object.defineProperty(window.location, 'hash', {
    writable: true,
    value: '#/'
  });
  const lastHashChangeEvent = new Event('hashchange');
  window.dispatchEvent(lastHashChangeEvent);

  expect(i).toEqual(1);
});
