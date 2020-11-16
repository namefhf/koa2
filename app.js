const Koa = require('koa')
// const Router = require('koa-router')
// const router = new Router()
const { userRouter, articleRouter } = require('./router/index')
const app = new Koa()
app.use(userRouter.routes()).use(userRouter.allowedMethods())
app.use(articleRouter.routes()).use(userRouter.allowedMethods())

app.listen(8888, () => {
  console.log('serve start')
})
