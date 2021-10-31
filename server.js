const express = require ('express');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const cors = require ('cors');

const app = express ();

// import routes
const postRoutesAdmin = require('./routes/posts')
const postRoutesUser = require('./routes/userpost')

// app middleware
app.use(bodyParser.json());
app.use(cors());

// route middleware

app.use(postRoutesAdmin);
app.use(postRoutesUser);

const PORT = 9000

const DB_URL="mongodb+srv://admin:12345@cluster0.eyxhl.mongodb.net/crudreact?retryWrites=true&w=majority";

mongoose.connect (DB_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
.then(()=>{
    console.log("DB Connected");
}).catch ((err) => {
    console.log("DB connection error", err)
})

app.listen(PORT, () =>{
    console.log(`Server is runing on ${PORT}`)
})