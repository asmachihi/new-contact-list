const mongoose = require ('mongoose')
require('dotenv').config({path : './config/.env'}) 


const connectDB = async() => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Data Base Connected')
    } catch (error) {
        console.log("impossible to connect the DB")
    }
}



module.exports = connectDB