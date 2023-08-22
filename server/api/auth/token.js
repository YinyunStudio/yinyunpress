import jwt from "jsonwebtoken"
import key from "../../utils/key"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const token = body.token.replace(/α/g, '.')

    try {
        const res = jwt.verify(token, key)
        return {
            state: true,
            token: res
        }
    } catch (error) {
        return {
            state: false,
            data: "Incorrect token",
            error: error
        }
    }
})