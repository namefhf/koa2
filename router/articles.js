const Router = require('koa-router')
const articleRouter = new Router({ prefix: '/articles' })
articleRouter.get('/', (ctx) => {
  ctx.body = 'article'
})
module.exports = articleRouter
