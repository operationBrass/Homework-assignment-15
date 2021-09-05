const router = require('express').Router();
const path = require('path');
const exerciseRoutes = require('../routes/exercise-routes');

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public/index.html"))
});

router.use("/exercise", exerciseRoutes);

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/stats.html"))
});


module.exports = router;

