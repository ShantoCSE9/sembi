const createError = require('http-errors')
const notFound=(req,res,next)=>{
      next( createError(404,'route not found'))
}

const errorHandler = (err, req, res, next) => {
    res.status(err.status||500).json({
      status: "failed",
      message: err?.message,
      stack: err?.stack,
    });
  };

  module.exports={
    notFound,
    errorHandler
  }
  