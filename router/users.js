const Router = require('koa-router')
const userRouter = new Router({ prefix: '/users' })
userRouter.get('/:id', (ctx) => {
  ctx.body = `userid:${ctx.params.id}`
})
module.exports = userRouter
