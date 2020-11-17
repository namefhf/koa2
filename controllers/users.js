class UsersCtl {
  find(ctx) {
    ctx.body = { name: "lilei" }
  }
  findById(ctx) {
    ctx.body = `userid:${ctx.params.id}`
  }
  create(ctx) {}
  update(ctx) {}
  delete(ctx) {}
}
module.exports = new UsersCtl()
