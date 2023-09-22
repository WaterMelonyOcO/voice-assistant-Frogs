const Router = require("express").Router
const multer = require("multer")
const request = require("request")

const route = Router()

route.post("/", ( req, resp )=>{
    console.log("difjgoidjfgio");
    resp.send("test response /api")
})

route.post("/getVoice", multer().none(), async ( req, resp )=>{
    // resp.send("not implemented")
    console.log("user erquest");

    const userAudioRequest = req.body
    if ( ! userAudioRequest ){
        resp.json({'message':'not input audio'})
        return
    }

    console.log(userAudioRequest);

    let req_to_Neiron = request.post({
        url: "http://localhost:4700",
        method: "POST",
        body: req.body.audio
    }, ( err, reqResp)=>{
        console.log(reqResp.body);
        resp.send(reqResp.body)
        return
    })
    // resp.send("adadadad")
    // console.log("end get voice words");
})


module.exports = route