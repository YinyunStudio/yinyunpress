import { db } from "~/server/mongodb"

export default defineEventHandler( async (event) => {

    const collection = db.collection("system")
    const title = await collection.find({type: "title"}).toArray()
    
    return {
        data: title[0].data,
        state: "ok"
        
    }
})