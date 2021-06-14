const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')
const decode = require('html-entities').decode;
const { exec } = require('child_process');
const fs = require('fs');
const { resolve } = require('path');

app.use(express.static(path.join(__dirname, '/dist/public')));
app.use(express.static(path.join(__dirname, '/dist/src')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text({ type: "text/code" }));

app.get('/', (req, res) => {
   res.sendFile('/index.html');
})

app.post('/', (req, res) => {
   console.log("post method");
   code = decode(req.body);
   console.log(code);

   var output = "";

   fs.writeFile(__dirname + "/temp/new.cpp", code, (err) => {
      console.log("file written");
      if (err){
         throw err;
      }
      else {
         exec("g++ ./temp/new.cpp -o ./temp/new.out && ./temp/new.out", (err, stdout, stderr) => {
            console.log("executing");
            if (err){
               res.status(202).send("Compilation error");
               // throw err;
            }
            else {
               if(stderr){
                  res.status(201).send("Runtime Error: " + stderr);
               }else{
                  res.status(200).send(stdout);
               }
            }
         })
      }
   });


})

app.listen(5000, () => {
   console.log("Server started at port 5000");
});