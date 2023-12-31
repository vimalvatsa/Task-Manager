const { CustomAPIError } = require('../errors/custom-error')
const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.status).json({ msg: err.message })
    }
    return res.status(err.status).json({ msg: 'Something Went wrong, please try again' })
}

module.exports = errorHandlerMiddleware;