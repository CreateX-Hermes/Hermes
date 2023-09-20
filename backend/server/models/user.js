const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    favoriteStands: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stand'
    }],
    profilePicture: {
        type: String
    },
    location: {
        type: {
            coordinates:{
                type: [Number],
            },
            mainType: {
                type: String,
                enum: ["Point"], // Specify that it's a Point type
                required: true
              }
        },
    },
    reviews: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Review",
        default: []
    }
})

module.exports = (mongoose.models.User ||  mongoose.model('User', userSchema))