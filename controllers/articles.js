class articleCtl {
  index(ctx) {
    ctx.body = "article"
  }
}
module.exports = new articleCtl()
