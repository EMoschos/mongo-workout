const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },
    exercises: Array
},
    {
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        }
    }
);

//Created Virtual to add the totalDuration property without changing the database structure.  This will also allow further development in case an exercise was deleted.
workoutSchema.virtual("totalDuration").get(function () {
    let totalDuration = 0;

    for (let i = 0; i < this.exercises.length; i++) {
        totalDuration += this.exercises[i].duration;
    };

    return totalDuration;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;