const router = require('express').Router();
const { Exercise } = require('../models');

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/exercise.html"))
});

router.get("/workouts", async (req, res) => {

    // i need to return the last row in the exercise table
    const exercises = await Exercise.find({});
    return (res.json(exercises));


});


router.get("/workouts:id", (req, res) => {

    // i need to return a specific row in the exercise table

});

router.get("/workouts/range", (req, res) => {

    // i need to return a range?? 

});



router.post("/workouts", (req, res) => {

    // i need to post a new workout

});


router.post("/workouts:id", (req, res) => {

    // i need to post a new exercise to an existing workout

});

module.exports = router;