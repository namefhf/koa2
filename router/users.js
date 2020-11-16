const Router = require('koa-router')
const userRouter = new Router({ prefix: '/users' })
userRouter.get('/', (ctx) => {
  ctx.body = [{ name: 'lilei' }, { name: 'mike' }]
})
userRouter.get('/:id', (ctx) => {
  ctx.body = `userid:${ctx.params.id}`
})
userRouter.put('/:id', (ctx) => {
  ctx.body = [{ name: 'lilei' }]
})
userRouter.delete('/:id', (ctx) => {
  ctx.status = 204
})
module.exports = userRouter
