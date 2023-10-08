module.exports = function (app,db) {
    //Route to manage user logins


    app.post('/api/add', async function (req, res) {
        if (!req.body) {
            return res.sendStatus(400)
        }

        // users = await db.collection("users").find({}).toArray();
       
        try{
            usernames = req.body.username;
            ids = req.body.id;
            pwds = req.body.pwd;
            emails = req.body.email;
            avatars = req.body.avatar;
            roles = req.body.role;
            info = db.collection('users').insertOne({id:ids,username:usernames,email:emails,pwd:pwds,role:roles})
            res.send(info); 
        }catch(err){
            console.log(err);
        }
    });
}
