import { MongoClient } from "mongodb"
import { config } from "~/mongodb.config"

const url = `mongodb://${config.host}:${config.port}`

const client = new MongoClient(url)
client.connect()
const db = client.db(config.db)

export { db }