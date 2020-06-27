var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var aylien = require("aylien_textapi");
projectData = [];

const dotenv = require('dotenv');
const { text } = require('body-parser')
dotenv.config();


// set aylien API credentials
// NOTICE that textapi is the name I used, but it is arbitrary.
// You could call it aylienapi, nlp, or anything else, 
//   just make sure to make that change universally!
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

//console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


app.post('/test',getText);

    function getText(req,res) {
       
       
        const t = req.body.value;
        console.log(t);
        textapi.sentiment(
            {
            text: `${req.body.value}`,
            },
            function (error,response) {
                if(error === null){
                 
                    res.send(response)
                    newEntery = {
                      newEnteryResponse:response
                    }
                    projectData.push(newEntery)
                    console.log(projectData);
                }
                else{
                    res.send(error);
                    console.log(error)
                }
            }
            
        )
    }
    
