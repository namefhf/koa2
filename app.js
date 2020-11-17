const Koa = require("koa")
const bodyparser = require("koa-bodyparser")

const app = new Koa()
const routing = require("./routes/index")
routing(app)
app.use(bodyparser())

app.listen(8888, () => {
  console.log("serve start")
})
