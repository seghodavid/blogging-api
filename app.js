require('dotenv').config()
const express = require('express')
const connectDb = require('./config/db.config')

const port = process.env.PORT || 5000



const app = express()




const start = async() => {
    await connectDb(process.env.MONGO_URL)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
}


start()