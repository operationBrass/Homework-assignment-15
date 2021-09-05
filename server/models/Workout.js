const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    day: Date,
    exercises: [
        {
            type:{String} ,
            name: String,
            duration: Number,      
            weight: Number,         
            reps: Number,
            sets: Number,
            distance:Number
        }
    ]
},
    { typeKey: '$type' }
);

module.exports = mongoose.model("Workout", workoutSchema);
//The first argument is the singular uppercase name of your database collection.
// The second argument is the schema which we defined above