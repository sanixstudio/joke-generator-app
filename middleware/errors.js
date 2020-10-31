module.exports = {
    pageNotFoundError: (req,res,next) => {
        const error = new Error('×: not found');
        error.status = 404;
        next(error)
    },

    internalServerError: (err,req,res,next) => {
        res.status(err.status || 505)
        .json({ error: { 
            status: (err.status || 500),
            message: err.message 
        }})
    }
};