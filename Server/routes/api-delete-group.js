// const { query } = require("express");

module.exports = function (app,db) {
    //Route to manage group deletes

    
    app.post('/api/delete_group', async function (req, res) {
        console.log('wow');
        if (!req.body) {
            return res.sendStatus(400)
        }

        // users = await db.collection("users").find({}).toArray();
        try{

            names = req.body.name;

            const result = await db.collection('groups').deleteOne({name:{$eq: names}});
            console.log(result);
            res.send(result);
        } catch (err){
            console.log(err.message);
        }
    });
}
