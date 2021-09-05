const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    day: { type: Date, default: Date.now },
    exercises: [
        {
            type: {
                type: String,
                // required: true
            },
            name: {
                type: String,
                // required: true
            },
            duration: {
                type: Number,
                // required: true
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            }
        }]
});

module.exports = mongoose.model("Workout", workoutSchema);
//The first argument is the singular uppercase name of your database collection.
// The second argument is the schema which we defined above