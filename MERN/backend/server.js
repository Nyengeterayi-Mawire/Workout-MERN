require('dotenv').config()

const express = require('express')
const cors = require('cors')
const workoutRoutes = require('./routes/workouts')
const app = express()  
const mongoose = require('mongoose')

app.use(express.json()) 
app.use(cors())

app.use((req,res,next )=> {
    console.log(req.path, req.method)
    next()
}) 
// app.get('/',(req,res) =>{
//     res.json({mssg: 'Hello there'})
// })


app.use('/api/workouts',workoutRoutes)

mongoose.connect('mongodb+srv://tinomudanm2:Savator123.@movie.mqpmd8o.mongodb.net/?retryWrites=true&w=majority')
.then(()=> {
    app.listen(3005,()=>{
        console.log('connected to db & running on port 3005')
    })  
}).catch((error) => {
    console.log(error)
})
// app.listen(process.env.PORT,()=>{
//     console.log('running on port 3005',process.env.PORT)
// })  



