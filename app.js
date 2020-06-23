const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage});
require('dotenv').config()
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// The index route
app.get("/", function(req, res) {
  res.status(202).json( { message :"Welcome to Leader board API "});
});

 app.post('/leaderboard', upload.single('file'), function (req, res) {
  
    // console.log("file", req.file)
    if(!req.file){
        console.log("File upload failed:")
        return res.status(406).json( { error :true ,  message :"upload failed"});
      }
      // res.status(401).json( { error :true ,  message :"file uploaded successfully "});
      //   console.log("file uploaded successfully ")
      fs.readFile(req.file.originalname, 'utf8', (err, json_string) => {
        if (err) {
            res.status(202).json( { error :true ,  message :"File read failed"});
            console.log("File read failed", err)
            return
        }
       
        json =  JSON.parse(json_string);
        let result = json.sort((a, b) => Number(b.points) - Number(a.points));
        // console.log(result)
        res.send({ status: true, msg: result });
               
    });
       
   });


// Fireup service on port
(async () => {

   app.listen(PORT, async function() {
       console.log(`Listening on Port ${PORT}`);
      
   });
})();