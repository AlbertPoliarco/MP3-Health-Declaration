const express = require("express")
const cors = require("cors")
const moongoose = require("mongoose")

require("dotenv").config()

const app = express()
const port = process.env.PORT || 4000

// Middleware
app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log(`Server is running in port: ${port}`)
})
