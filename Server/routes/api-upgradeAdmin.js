// const { query } = require("express");

module.exports = function (app,db) {
    //Route to upgrade users to admin

    
    app.post('/api/upgrade', async function (req, res) {
        if (!req.body) {
            return res.sendStatus(400)
        }

        // users = await db.collection("users").find({}).toArray();
        try{

            ids = req.body.id;

            const result = await db.collection('users').updateOne({id: ids}, {'$set' : {'role' : 'admin' }});
            console.log(result);
            res.send(result);
        } catch (err){
            console.log(err.message);
        }
    });
}
