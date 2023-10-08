module.exports = async function (app,db) {
    //Route to manage user logins


    app.get('/api/users', async function (req, res) {
       
      let cars = await db.collection("users").find({}).toArray();
        res.send(JSON.stringify(cars));
        return true;
    })
    
}
