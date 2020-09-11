const db = require("../models");

module.exports = app => {
    //This route gets the latest workout to appear in the summary on the homepage.  The .sort('day') means that the workouts will be sorted in ascending order if .sort('-day') was used this would sort in descending order.
    app.get("/api/workouts", (req, res) => {
        console.log("Workout API")
        console.log("____(1)____")
        db.Workout.find().sort('day').then(dbWorkout => {
            res.json(dbWorkout)
        }).catch(err => {
            console.log(err);
            res.json(err);
        });
    });

    //This route adds exercises to the workout in the exercises property as an array.
    app.put("/api/workouts/:id", (req, res) => {
        const id = req.params.id;
        const addExercises = req.body;
        // STILL NEED TO DEVELOP ROUTE
        console.log("Workout PUT +ID API")
        console.log("____(2)____");

        //The 'returnOriginal: false' returns the updated object rather than the object before update.  
        db.Workout.findOneAndUpdate({ _id: id }, { $push: { exercises: addExercises } }, { returnOriginal: false }).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            console.log(err);
            res.json(err);
        });
    });
    // Route for creating a new workout, this creates a workout with an empty array in the exercises property.
    app.post("/api/workouts", (req, res) => {
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

    //This route gets all the workouts to display on the graphs on the Dashboard
    app.get("/api/workouts/range", (req, res) => {
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