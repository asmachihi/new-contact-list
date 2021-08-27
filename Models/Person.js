const mongoose = require('mongoose')
const schema = mongoose.Schema

const personSchema = new schema({
    firstname :{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        min:10,
        max:60
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})


module.exports = mongoose.model("Person",personSchema)