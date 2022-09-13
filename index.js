const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
// Routes
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
dotenv.config()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Db Connection Successfully'))
  .catch(err => console.log(err))

app.use(express.json())
app.use(cors())

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
app.use('/api/carts', cartRoute)
app.use('/api/orders', orderRoute)

// listen
app.listen(process.env.PORT || 5500, () => {
  console.log('Server on 5500')
})
