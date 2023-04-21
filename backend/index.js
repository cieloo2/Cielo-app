const express = require("express")

const app = express()

app.get("/users", (req, res) => {
  var usuario = { "nombre": "Luis", "id": 10, "email": "blueluis222@gmail.com" }
  res.json(usuario)
})

app.listen(3000, () => console.log("running on port 3000"))