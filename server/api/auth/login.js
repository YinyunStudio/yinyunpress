import { db } from "~/server/mongodb"
import jwt from "jsonwebtoken"
import key from "../../utils/key"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const collection = db.collection("user")
    const [user] = await collection.find({account: body.account}).toArray()
    
    let state
    let data
    if (user != undefined && user.password == body.password ) {
        state = true
        
        const timeout = 60*30 * 5
        let token = jwt.sign(
            {
                uid: user.uid,
                id: user.id,
                name: user.name,
                avatar: user.avatar
            }, key, {
                expiresIn: timeout,
            }
        )
        token = token.replace(/\./g, 'α')
        data = {
            token: token
        }
    } else {
        state = false
    }
    
    return {
        state: state,
        data: data
    }
})