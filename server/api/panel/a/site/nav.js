import { db } from "../../../../utils/mongodb"

export default defineEventHandler( async (event) => {

    const body = await readBody(event)
    const collection = db.collection("system")
    const nav = body.nav
    const updateResult = await collection.updateOne({ type: 'nav' }, { $set: { data: nav } })
    // console.log(updateResult)
    if ( updateResult.acknowledged == true ) {
        return {
            state: true
        }
    } else {
        return {
            state: false
        }
    }
})  