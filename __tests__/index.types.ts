import Router from "../lib/index.js";

new Router({
  context: {},
  debug: true,
  startListening: false,
});

new Router({
  startListening: false,
});

const router = new Router();

router
  .add("blog", () => {})
  .add(() => {})
  .add("s", function b() {})
  .remove("blog", () => {});

router.add("home", method);
router.remove("home", method);
router.remove("home", () => 2);
router.remove("home");

router.reload() === router;

router.navigate("test-nav") === router;

function method() {
  console.log("x");
}

router.isListening === true;

router.listen({});
router.listen(null);
router.listen(window);
router.stopListen(null);
router.stopListen({});
router.stopListen(window);

Router.cleanPath("#/#/test").substring(0);
Router.parseRoute("#/test/1/5")
  .map((x) => x)[0]
  .substring(0);
