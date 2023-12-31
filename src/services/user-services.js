import { request } from "express"
import { registerUserValidation } from "../validation/user-validation.js"
import { validate } from "../validation/validation.js"
import { PrismaClients } from "../applications/database.js"
import { ResponseError } from "../error/response-error.js"
import bcrypt from "bcrypt"


const register = async (reques) => {
    const user = validate(registerUserValidation, request)

    const countUser = await PrismaClients.user.count({
        where : {
            username:user.username
        }
    })

    if (countUser == 1){
        throw new  ResponseError(400, "Username already exists")
    }

    user.password = await bcrypt.hash(user.password, 10)

    const result =  PrismaClients.user.create({
        data: user,
        select: {
            username:true,
            name:true
        }
    })


    return result
}

export default {
    register
}