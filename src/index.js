const Koa = require("koa");
const Router = require("koa-router");

const router = new Router();
const server = new Koa();

router
  .get("/", (ctx) => {
    ctx.body = "<h1>Welcome!</h1>";
  })
  .get("/contato", (ctx) => {
    ctx.body = "<h1>Contato</h1>";
  });

server.use(router.routes());

server.listen(3000, () => console.log("listening on port 3000"));
