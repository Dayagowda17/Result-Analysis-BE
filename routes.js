module.exports = async(app) => {
    app.get('/faculty', async(req, res) => {
        //fetch it from database
        res.status(200).json([{ name: "A", id: 1 }, { name: "B", id: 2 }])
    });
}