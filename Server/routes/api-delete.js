// const { query } = require("express");

module.exports = function (app,db) {
    //Route to manage user deletes

    
    app.post('/api/delete', async function (req, res) {
        console.log('wow');
        if (!req.body) {
            return res.sendStatus(400)
        }

        // users = await db.collection("users").find({}).toArray();
        try{

            ids = req.body.id;

            const result = await db.collection('users').deleteOne({id:{$eq: ids}});
            console.log(result);
            res.send(result);
        } catch (err){
            console.log(err.message);
        }
    });
}
