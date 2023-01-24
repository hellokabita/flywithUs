const express= require('express');
const PORT = 5000;
const bodyParser = require('body-parser')
const cors = require('cors')
const servicesController = require('./controller/servicesController')

require('./models/users')
const app =express();

require('./db/connect');
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

app.get('/signup', (req,res)=>{
    res.send("hello world from the router page") 
})

const registerRouter = require('./routes/registerRoute');
const loginRouter = require('./routes/loginRouter');
const changePassword =require('./routes/changePswdRoute')
// const servicesRouter = require('./routes/servicesRouter')



app.use(registerRouter)
app.use(loginRouter)
app.use(changePassword)
app.post('/api/services', servicesController.addServices)
app.get('/api/services', servicesController.getServices)
app.get('/api/slider', servicesController.getSlider)


// app.use(servicesRouter)




app.listen(PORT, ()=>{
    console.log(`server is running on port no.${PORT}`)
})