const mongoose = require ('mongoose');

const postSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require : true,

    },
    lastName :{

        type : String,
        require : true
    },

    email :{
        type : String,
        require: true
    },

    password: {
        type: String,
        required: true,
      },


})

module.exports = mongoose.model('Posts', postSchema)