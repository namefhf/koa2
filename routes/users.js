const Router = require('koa-router')
// const jsonwebtoken = require('jsonwebtoken')
const jwt = require('koa-jwt') //该包也内置了jsonwebtoken
const { secret } = require('../config')
const router = new Router({ prefix: '/users' })
const {
  find,
  create,
  findById,
  update,
  delete: del,
  login,
  checkOwner,
} = require('../controllers/users')
// 认证
// const auth = async (ctx, next) => {
//   const { authorization = '' } = await ctx.request.header
//   const token = authorization.replace('Bearer ', '')
//   try {
//     const user = jsonwebtoken.verify(token, secret)
//     ctx.state.user = user
//   } catch (error) {
//     ctx.throw(401, error.message)
//   }
//   await next()
// }
const auth = jwt({ secret })

router.get('/', find)
router.post('/', create)
router.get('/:id', findById)
router.patch('/:id', auth, checkOwner, update)
router.delete('/:id', auth, checkOwner, del)
router.post('/login', login)
module.exports = router
