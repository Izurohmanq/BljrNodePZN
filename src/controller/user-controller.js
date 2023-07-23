import userService from "../services/user-services.js"

const register = (req, res, next) => {
    try {
        const result = userService.register(req.body)
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
}

export default {
    register
}