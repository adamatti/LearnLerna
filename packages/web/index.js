const express = require("express"),
      app = express()

app.get("/",(req,res) => {
    res.send({
        status: "ok",
        dt : new Date()
    })
})

app.listen(process.env.PORT|| 3000, () =>{
    console.log("App started")
}) 