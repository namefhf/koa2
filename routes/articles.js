const Router = require("koa-router")
const router = new Router({ prefix: "/articles" })
const { index } = require("../controllers/articles")
router.get("/", index)
module.exports = router
