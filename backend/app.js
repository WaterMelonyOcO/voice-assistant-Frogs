const express = require("express")
const apiroute = require("./api")

const app = express()

app.use("/api", apiroute)

app.get("/", (req, resp )=>{
    resp.send("<h1>test back request</h1>")
})

app.listen(4500, ()=>{
    console.log("server start");
})