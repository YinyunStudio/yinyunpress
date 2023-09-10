import { MongoClient } from "mongodb"
import config from "~/server/utils/useConfig"

// const config = useRuntimeConfig().db

// const url = `mongodb://${config.host}:${config.port}`

// const client = new MongoClient(url)
// client.connect()
// const db = client.db(config.database)
// const config = useRuntimeConfig()
// console.log(config.db.port)

const url = `mongodb://${config.db.host}:${config.db.port}`

const client = new MongoClient(url)
client.connect()
const db = client.db(config.db.database)
export { db }