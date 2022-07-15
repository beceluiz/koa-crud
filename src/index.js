const Koa = require("koa");
const Router = require("koa-router");

const router = new Router();
const app = new Koa();

router
  .get("/", (ctx) => {
    ctx.body = { message: "Hello!" };
  })
  .get("/courses", (ctx) => {
    const query = ctx.query;
    console.log(query);
    ctx.body = ["course 1", "course 2", "course 3"];
  })
  .post("/courses", (ctx) => {
    ctx.body = ["course 1", "course 2", "course 3", "course 4"];
  })
  .put("/courses/:id", (ctx) => {
    const { id } = ctx.params;
    console.log(id);
    ctx.body = ["course 6", "course 2", "course 3", "course 4"];
  })
  .patch("/courses/:id", (ctx) => {
    ctx.body = ["course 6", "course 7", "course 3", "course 4"];
  })
  .delete("/courses/:id", (ctx) => {
    ctx.body = ["course 6", "course 7", "course 3", "course 4"];
  });

app.use(router.routes());

app.listen(3000);
