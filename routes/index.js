const fs = require("fs")
//批量读取路由文件并注册
module.exports = (app) => {
  fs.readdirSync(__dirname).forEach((item) => {
    if (item === "index.js") return
    const route = require(`./${item}`)
    app.use(route.routes()).use(route.allowedMethods())
  })
}
