require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const rateLimiter = require('express-rate-limit')
const morgan = require('morgan')
const xss = require("xss-clean");
const connectDb = require('./config/db.config')

const port = process.env.PORT || 5000



const app = express()

//Security
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, //15 minutes
    max: 100, //limit each IP request to  100 requests per window
  })
);

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(morgan('common'))


const start = async() => {
    await connectDb(process.env.MONGO_URL)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
}


start()