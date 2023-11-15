const rateLimit=require('express-rate-limit')

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minutes
	limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	message:"Too many request. Please try again later"
})

module.exports={
    limiter
}