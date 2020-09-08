const db = require("../models");

module.exports = app => {
    app.get("/api/workouts", (req, res) => {
        // STILL NEED TO DEVELOP ROUTE
        console.log("Workout API")
        console.log("____(1)____")
        db.Workout.find().then(dbWorkout => {
            res.json(dbWorkout)
        }).catch(err =>{
            console.log(err);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        // STILL NEED TO DEVELOP ROUTE
        console.log("Workout PUT +ID API")
        console.log("____(2)____")
    });

    app.post("/api/workouts", (req, res) => {
        // STILL NEED TO DEVELOP ROUTE
        console.log("Workout POST API")
        console.log("____(3)____")
    });

    app.get("/api/workouts/range", (req, res) => {
        // STILL NEED TO DEVELOP ROUTE
        console.log("Workout Range API");
        console.log("____(4)____");
        db.Workout.find().then(dbWorkout => {
            console.log(dbWorkout.exercises)
            res.json(dbWorkout)
        }).catch(err =>{
            console.log(err);
        });
    });

};