// require('dotenv').config()
const PORT = 3000;
const express = require('express');  // Import express.js
const {MongoClient} = require('mongodb');
const app = express();  // The app object conventionally denotes the Express application. Create it by
                        // calling the top-level express() function exported by the Express module.

const path = require('path');

const http = require('http').Server(app);
var fs = require('fs');
const formidable = require('formidable');
var cors = require('cors')
app.use(cors());
app.use (express.json());   // Mounts the specified middleware function at the
                            // specified path: the middleware function is executed when the base of the
                            // requested path matches path. In this case we are using middleware to parse
                            // JSON data

app.use('/images',express.static(path.join(__dirname, 'userimages')));
//Require socket.io
const io = require('socket.io')(http,{
    cors:{
     origin:"http://localhost:4200",
        methods:["GET","POST"],
    }
});
const sockets = require('./socket.js');

//mongo connection strin g to mongo atlas database
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);
async function main() {
	
    try{
       
        await client.connect();
        let db = client.db("demo-app");
        console.log("DB connected");

        sockets.connect(io, PORT, app,db, 'Group 2');
    
        //POST Route for uploading images.
        require('./routes/api-uploads.js')(app,formidable,fs,path);

        //POST route for updating user profile information
        require('./routes/api-update-users.js')(app,db);

        // POST Route for checking user credentials
        require('./routes/api-login.js')(app,db);

        // POST Route for Adding users
        require('./routes/api-add.js')(app,db);

        // POST Route for Adding groups
        require('./routes/api-add-groups.js')(app,db);

        // POST Route for Deleteing users
        require('./routes/api-delete.js')(app,db);

        // POST Route for Deleteing groups
        require('./routes/api-delete-group.js')(app,db);

        // GET Route for getting all user data
        require('./routes/api-data-users.js')(app,db);

        // GET Route for getting all groups data
        require('./routes/api-data-groups.js')(app,db);

        // POST Route for upgrading users to admin
        require('./routes/api-upgradeAdmin.js')(app,db);

        // POST Route for demoting users to admin
        require('./routes/api-demoteAdmin.js')(app,db);

        // // Start the server listening on port 3000. Output message to console once server has started.(diagnostic only)
         require('./listen.js')(http,PORT);
         
    }
    catch(e){
        console.log(e);
    }
    
}main().catch(console.error);


