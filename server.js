var express=require("express")
var fs=require("fs")
var cors=require("cors")

var app=express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    fs.readFile("./data.js","utf-8",(err,data)=>{
        if(err){
            res.send(err.message)
        }
        else{
            res.send(data)
        }
    })
    // res.send("karthik")
})

var port=3003
app.listen(port,()=>{
    console.log("Server started")
})