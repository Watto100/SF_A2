module.exports = function (app,db) {
    //Route to add new group


    app.post('/api/add_group', async function (req, res) {
        if (!req.body) {
            return res.sendStatus(400)
        }

        // users = await db.collection("users").find({}).toArray();
       
        try{
            names = req.body.name;
            channel = req.body.channels;
            member = req.body.members;
            info = db.collection('groups').insertOne({name:names, channels:channel, members:member})
            res.send(info); 
        }catch(err){
            console.log(err);
        }
    });
}
