const express = require('express')
const mongoose = require('mongoose')
const route = require('./route');
const bodyParser = require('body-parser')
const cors = require('cors');
const { json } = require('body-parser');
mongoose.connect("mongodb+srv://Data:Data2345@cluster0.1mdei.mongodb.net/Student?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
   ()=> {
         const app = express();
        app.use("/api", route);
        app.use(cors());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(express.json());
        app.listen(process.env.PORT || 3000,(err)=>{
            if(err)
            {
                  console.log(err);
            }else{
                  console.log('Server started')
              }
    })
      } 
)