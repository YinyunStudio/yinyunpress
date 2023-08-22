import { db } from "~/server/mongodb"

export default defineEventHandler( async (event) => {

    const collection = db.collection("system")
    const nav = await collection.find({type: "nav"}).toArray()
    const title = await collection.find({type: "title"}).toArray()
    const data = {
        title: title[0].data,
        nav: nav[0].data
    }
    
    return {
        data: data,
        state: "ok"
        
    }
})