const express = require("express")

const app = express();

app.use("/", (req, res)=>{
    res.send("hello world new server running")
})
app.use("/test", (req, res)=>{
        res.send("test page")
})
app.listen(3000, () =>{
    console.log("server successfully running in 3000 port")
})