import Router from './index';

test('Simple routing setup', () => {
  const router = new Router();

  router
    .add(() => {
      const a = 123;
    })
    .add('home', () => {
      const a = 123;
    })
    .listen();

  window.location.hash = 'home';

  expect(router.currentPage).toEqual('home');
});

test('Simple routing setup with navigate', () => {
  const router = new Router();

  router
    .add(() => {
      const a = 123;
    })
    .add('home', () => {
      const a = 123;
    })
    .listen();

  window.location.hash = 'home';

  router.navigate('');

  expect(router.currentPage).toEqual('');
});
