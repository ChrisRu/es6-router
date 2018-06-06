import Router from '../index';

test('Simple routing setup', () => {
  const router = new Router();

  router.add(() => {}).add('home', () => {});

  window.location.hash = 'home';

  expect(router.currentRoute).toEqual('home');
});

test('Simple routing setup event', () => {
  const router = new Router();
  let i = false;

  router.add(() => {}).add('home', () => {
    i = true;
  });

  window.history.pushState(null, null, '#/home');
  window.dispatchEvent(new CustomEvent('hashchange'));

  expect(i).toEqual(true);
});

test('Simple routing setup regex', () => {
  const router = new Router();
  let i = false;

  router.add(() => {}).add(/[a-z]-test/, () => {
    i = true;
  });

  window.location.hash = 'd-test';
  router.reload();

  expect(i).toEqual(true);
});

test('Simple routing setup regex negative', () => {
  const router = new Router();

  let i = false;

  router.add(() => {}).add(/[a-z]-test/, () => {
    i = true;
  });

  window.location.hash = '1-test';
  router.reload();

  expect(i).toEqual(false);

  router.stopListen();
});

test('Simple routing setup with navigate', () => {
  const router = new Router();
  let i = 0;

  router
    .add('test-nav', () => {
      i = 1;
    })
    .add('home-nav', () => {
      i = 2;
    });

  window.location.hash = 'home-nav';
  router.reload();

  expect(i).toEqual(2);

  router.navigate('test-nav');

  expect(i).toEqual(1);
});

test('Routing global', () => {
  const router = new Router();
  let i = false;

  router.add(() => {
    i = true;
  });

  router.reload();

  expect(i).toEqual(true);
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
  const router = new Router({ startListening: false });

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

test('Stop listening', () => {
  const router = new Router();
  let i = 0;

  router.add('home', () => {
    i = 1;
  });
  router.add('last', () => {
    i = 2;
  });

  router.listen();

  window.location.hash = '#/home';

  expect(i).toEqual(1);

  router.stopListen();

  window.location.hash = '#/last';

  expect(i).toEqual(1);
});

test('Do not init listen on construct', () => {
  const router = new Router({ startListening: false });
  let i = 0;

  router.add(() => {
    i = 1;
  });

  window.location.hash = '#/';

  expect(i).toEqual(0);

  router.listen();

  window.location.hash = '#/f';

  expect(i).toEqual(1);
});

test('Clean path preceding content', () => {
  expect(Router.cleanPath('#/#/test')).toEqual('test');
});

test('Clean path trailing slashes', () => {
  expect(Router.cleanPath('#/test///')).toEqual('test');
});

test('Clean path remove querystring', () => {
  expect(Router.cleanPath('#/test?rest=5&test=100')).toEqual('test');
});

test('Parse url', () => {
  expect(Router.parseRoute('#/test/1/5')).toEqual(['test', '1', '5']);
});

test('Parse url random slashes', () => {
  expect(Router.parseRoute('#//^31/test/()/5/')).toEqual([
    '^31',
    'test',
    '()',
    '5'
  ]);
});
