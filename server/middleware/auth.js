import jwt from 'jsonwebtoken'
import key from '../utils/key'



export default defineEventHandler( async (event) => {
    const path = getRequestPath(event)
    if( path.split('/')[2] === 'panel' ){

        const token = getCookie(event, 'token').replace(/α/g, '.')

        try {
            const res = jwt.verify(token, key)
            return
        } catch (error) {
            return {
                state: false,
                data: "Incorrect token",
                error: error
            }
        }

    }
})