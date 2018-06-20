const User = require('../models/user.model');

const putUser = async (ctx) => {
  const user = await User.findOneAndUpdate({fbId: ctx.request.body.fbId}, {nannies: ctx.request.body.nannies}, {new: true})
  user.friends = await attachFriends(user.friends);
  ctx.response.body = user
} 

const postUser = async (ctx) => {
  let user = await findUser(ctx.request.body.id);
  if (!user) {
    user = await User.create({
      fbId: ctx.request.body.id,
      name: ctx.request.body.name,
      photo: `https://graph.facebook.com/${ctx.request.body.id}/picture?type=normal`,
      friends: ctx.request.body.friends,
      nannies: ctx.request.body.nannies,
    })
    //HERE
    user.friends = await attachFriends(user.friends);
    console.log(user.friends);
    ctx.response.body = user;
  } else {
    //HERE
    user.friends = await attachFriends(user.friends);
    ctx.response.body = user;
  }
}

const findUser = async (userID) => {
  const user = await User.findOne({fbId: userID});
  if (user) return user;
  else return null;
}

const attachFriends = async (friends) => {
  return await Promise.all(friends.map(friendID => {
    return findUser(friendID);
  }))
}

module.exports = {
  putUser,
  postUser
}