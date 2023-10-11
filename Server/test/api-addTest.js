// module.exports = function add(app,db) {
//     //Route to add new user


//     app.post('/api/add', async function (req, res) {
//         if (!req.body) {
//             return res.sendStatus(400)
//         }

//         // users = await db.collection("users").find({}).toArray();
       
//         try{
//             usernames = req.body.username;
//             ids = req.body.id;
//             pwds = req.body.pwd;
//             emails = req.body.email;
//             avatars = req.body.avatar;
//             roles = req.body.role;
//             info = db.collection('users').insertOne({id:ids,username:usernames,email:emails,pwd:pwds,role:roles})
//             res.send(info); 
//         }catch(err){
//             console.log(err);
//         }
//     });
// }
module.exports = function add(db, data) {
    //Route to add new user

        // users = await db.collection("users").find({}).toArray();
        try{
            usernames = data.username;
            ids = data.id;
            pwds = data.pwd;
            emails = data.email;
            avatars = data.avatar;
            roles = data.role;
            info = db.collection('users').insertOne({id:ids,username:usernames,email:emails,pwd:pwds,role:roles})
            console.log(info);
            return(info); 
        }catch(err){
            console.log(err);
        }
    }