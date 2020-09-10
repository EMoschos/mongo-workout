const db = require("../models");

module.exports = app => {
    app.get("/api/workouts", (req, res) => {
        // STILL NEED TO DEVELOP ROUTE
        console.log("Workout API")
        console.log("____(1)____")
        db.Workout.find().sort('day').then(dbWorkout => {
            res.json(dbWorkout)
        }).catch(err => {
            console.log(err);
            res.json(err);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        const id = req.params.id;
        const addExercises = req.body;
        // STILL NEED TO DEVELOP ROUTE
        console.log("Workout PUT +ID API")
        console.log("____(2)____");
        db.Workout.findOneAndUpdate({ _id: id }, { $push: { exercises: addExercises }}, { returnOriginal: false }).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            console.log(err);
            res.json(err);
        });
    });

    app.post("/api/workouts", (req, res) => {
        // Route for posting data to mongoDB
        console.log("Workout POST API")
        console.log("____(3)____")
        const workout = new db.Workout;

        workout.save().then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            console.log(err);
            res.json(err);
        })
    });

    app.get("/api/workouts/range", (req, res) => {
        // STILL NEED TO DEVELOP ROUTE
        console.log("Workout Range API");
        console.log("____(4)____");
        db.Workout.find().then(dbWorkout => {
            console.log(dbWorkout)
            res.json(dbWorkout)
        }).catch(err => {
            console.log(err);
        });
    });

};