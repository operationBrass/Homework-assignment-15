const router = require('express').Router();
const { Workout }  = require('../models');
const path = require('path');

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/Workout.html"))
});

router.get("/workouts", async (req, res) => {
    // i need to return the last row in the Workout table
    Workout.aggregate([
        {
          $addFields: {
            totalDuration: { $sum: "$exercises.duration" },
          },
        },
      ]).then((data) => {
        res.json(data);
      }).catch((err) => res.status(500).json(err)) 
});


router.get("/workouts/:id", async (req, res) => {

    // i need to return a specific row in the Workout table
    console.log(res.params)
    const workout = await Workout.find({_id:req.params.id});
    return (res.json(workout));
});

router.get("/workouts/range", (req, res) => {

    // i need to return a range?? 

});



router.post("/workouts", (req, res) => {

    // i need to post a new workout

});


router.post("/workouts:id", (req, res) => {

    // i need to post a new Workout to an existing workout

});

module.exports = router;