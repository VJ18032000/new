const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb://127.0.0.1/ecfile"

const app = express()
const bodyParser=require('body-parser')

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection
con.on('open', () => {
    console.log('database connection....')
})

app.get('',(req,res)=>{
    res.send("hello")
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())
app.use('/uploads', express.static('uploads'))

const PosBilling = require('./router/Pos_billing/profile')

app.use('/posbilling', PosBilling)


app.listen(4000, () => console.log('server connection...4000'))