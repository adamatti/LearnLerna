const express = require("express"),
      app = express()

app.get("/",(req,res) => {
    res.send({
        status: "ok 2",
        dt : new Date()
    })
})

app.listen(3001, () =>{
    console.log("App started 2")
}) 