module.exports = async function (app,db) {

    app.get('/api/delete', async function (req, res) {
       
      let groups = await db.collection("groups").find({}).toArray();
        res.send(JSON.stringify(groups));
        return true;
    })
    
}
