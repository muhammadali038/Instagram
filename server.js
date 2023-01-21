require('dotenv').config()
//express module is imported here
const express = require('express')
//mongoose module is imported here
const mongoose = require('mongoose')
//cors module is imported here
const cors = require('cors')
//cookie-parser  module is imported here
const cookieParser = require('cookie-parser')
//socketServer  module is imported here
const SocketServer = require('./socketServer')
//peer  module is imported here
const { ExpressPeerServer } = require('peer')
//Path module is imported here
const path = require('path')

//The app.use() function is used to mount the specified middleware function(s).
const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())


// Socket http requests , packege = socket.io
const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', socket => {
    SocketServer(socket)
})

// peer server is created here
ExpressPeerServer(http, { path: '/' })


// All Routes are defined here

//This is user route function 
app.use('/api', require('./routes/authRouter'))
//This is auth Router function 
app.use('/api', require('./routes/userRouter'))
//This is post Router function
app.use('/api', require('./routes/postRouter'))
//This is comment Router function
app.use('/api', require('./routes/commentRouter'))
//This is notify Router function
app.use('/api', require('./routes/notifyRouter'))
//This is message Router function
app.use('/api', require('./routes/messageRouter'))


const URI = process.env.MONGODB_URL
//This function successfully connect database through
mongoose.connect(URI, {
    useCreateIndex: true,      // this  is used to finish warnings in cmd durring Execution
    useFindAndModify: false,   // this  is used to finish warnings in cmd durring Execution
    useNewUrlParser: true,     // this  is used to finish warnings in cmd durring Execution
    useUnifiedTopology: true   // this  is used to finish warnings in cmd durring Execution
    //If there is any error in database connection this function will call  
}, err => {
    if(err) throw err;
    console.log('Connected to mongodb')
})

if(process.env.NODE_ENV === 'production'){
    //there express.static is function of the express whitch is different from =>> const express = require('express') ==>> const path = require('path')
    app.use(express.static('client/build'))
    // call back function returns response
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

// server is runnung at 5000 port
const port = process.env.PORT || 5000
http.listen(port, () => {
    console.log('Server is running on port', port)
})