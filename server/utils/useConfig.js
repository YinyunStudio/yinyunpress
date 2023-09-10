import * as fs from "node:fs"
let config = JSON.parse(fs.readFileSync("./config.json").toString())
export default config