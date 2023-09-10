import { db } from "../../../utils/mongodb"

export default defineEventHandler( async (event) => {

    const collection = db.collection("system")
    const rawData = await collection.find({type: "show"}).toArray();
    const data = rawData[0].data
    
    return {
        state: "ok"
        
    }
})