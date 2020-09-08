const path = require("path")

module.exports = app => {
    app.get("/", function(req, res){
        // STILL NEED TO DEVELOP INDEX HTML ROUTE
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/stats", function(req, res){
        // STILL NEED TO DEVELOP INDEX HTML ROUTE
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    app.get("/exercise", function(req, res){
        // STILL NEED TO DEVELOP INDEX HTML ROUTE
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
};



