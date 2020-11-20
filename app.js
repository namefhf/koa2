const Koa = require('koa')
const bodyparser = require('koa-bodyparser') //处理post请求体
const error = require('koa-json-error') //错误处理
const parameter = require('koa-parameter') //校验参数
const mongoose = require('mongoose')

const app = new Koa()
const routing = require('./routes/index')
const { connectionStr } = require('./config')
// 数据库连接
mongoose.connect(
  connectionStr,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('connect success')
  }
)
mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err)
})
app.use(
  error({
    //生产环境关闭stack字段
    postFormat: (e, { stack, ...rest }) =>
      process.env.NODE_ENV === 'production' ? rest : { stack, ...rest },
  })
)
app.use(bodyparser())
app.use(parameter(app)) //该中间件会在ctx中添加方法
routing(app)

app.listen(8888, () => {
  console.log('serve start')
})
