const express = require("express")

const Engine = require("../src/core/engine")

const app = express()

const engine = new Engine()

app.get("/", (req,res)=>{
 res.send("Clawde Network Running")
})

app.get("/battle",(req,res)=>{

 const result = engine.runBattle()

 res.json(result)

})

app.listen(3000,()=>{
 console.log("Server running on port 3000")
})
