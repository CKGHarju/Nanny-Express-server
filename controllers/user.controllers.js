const User = require('../models/user.model');

const getUser = async (ctx) => {

} 

const postUser = async (ctx) => {
  const user = await User.findOne({fbId: ctx.request.body.id})
  if (!user) {
    await User.create({
      fbId: ctx.request.body.id,
      name: ctx.request.body.name,
      photo: `https://graph.facebook.com/${ctx.request.body.id}/picture?type=normal`
    })
    ctx.response.body = ctx.request.body;
  } else {
    ctx.response.body = user;
  }
}

module.exports = {
  getUser,
  postUser
}