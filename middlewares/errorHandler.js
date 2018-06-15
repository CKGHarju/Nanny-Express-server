const errorHandler = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    console.log(error);
    ctx.body = undefined;
    ctx.status = ctx.status >= 400 && ctx.status || 400;
    if (error.message) {
      ctx.body = {error: error.message}
    }
  }
}

module.exports = errorHandler;