const User = require('../models/user.model');

//Receive an array of nannies from the user and update them.
const putNannies = async (ctx) => {
  const userId = ctx.user.id;
  const nannies = ctx.body.nannies;

  User.findOneAndUpdate(
    { _id: userId},
    {nannies},
    { new: true})
  .then(res => ctx.response.body = res)
  .catch(err => throw new Error (err.message))
}

module.exports = {
  putNannies,
}
