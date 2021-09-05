const router = require('express').Router();
const Workout = require('../models');
const path = require('path');

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/exercise.html"))
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

router.get("/workouts/range", (req, res) => {
  console.log("hi");
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

router.post("/workouts", async (req, res) => {
  try {
    const workout = await Workout.create(req.body)
    res.json(workout);
  }
  catch(err) {
    console.log(err);
  }
});

router.put("/workouts/:id", async (req, res) => {
  
  try {
    const workout = await Workout.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } })
    res.json(workout);
  } catch(err)
  {
    console.log(err);
  };
  
});

module.exports = router;