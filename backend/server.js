const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

require("dotenv").config()

const app = express()
const port = process.env.PORT || 4000

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB connection
const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const connection = mongoose.connection
connection.once("open", () => {
  console.log("MongoDB database connection is established.")
})

app.listen(port, () => {
  console.log(`Server is running in port: ${port}`)
})
