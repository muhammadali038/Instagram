//mongoose is imported here for this module
const mongoose = require('mongoose')
//User Schema is initialize here
const userSchema = new mongoose.Schema({
    //requirements for the fullname typing
    fullname: {
        type: String,     //A String in CSS is a text, String is a sequence of characters
        required: true,   //Property Values =>> Value, Specifies here  data field should be a required part of form submission.
        trim: true,       //this propert removes irregular spacing, leaving one space between each value
        maxlength: 25 //name can never more then 25 leaters
    },
     //requirements for the username typing
    username: {
        type: String,     //A String in CSS is a text, String is a sequence of characters
        required: true,   //Property Values =>> Value, Specifies here  data field should be a required part of form submission.
        trim: true,       //this propert removes irregular spacing, leaving one space between each value
        maxlength: 25,  //name can never more then 25 leaters
        unique: true      // i am using this property for the uniqueness of the username
    },
     //requirements for the email typing
    email: {
        type: String,     //A String in CSS is a text, String is a sequence of characters
        required: true,   //Property Values =>> Value, Specifies here  data field should be a required part of form submission.
        trim: true,       //this propert removes irregular spacing, leaving one space between each value
        unique: true      // Always email adresses are unique
    },
         //requirements for the password typing
    password: {
        type: String,     //A String in CSS is a text, String is a sequence of characters
        required: true    //Property Values =>> Value, Specifies here  data field should be a required part of form submission.
    },
    avatar:{
        type: String,     
        default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
    },
    role: {type: String, default: 'user'},
    gender: {type: String, default: 'male'},
    mobile: {type: String, default: ''},
    address: {type: String, default: ''},
    story: {
        type: String, 
        default: '',
        maxlength: 200
    },
    website: {type: String, default: ''},
    followers: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    following: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    saved: [{type: mongoose.Types.ObjectId, ref: 'user'}]
}, {
    timestamps: true
})

module.exports = mongoose.model('user', userSchema)