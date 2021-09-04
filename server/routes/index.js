const router = require('express').Router();
const path = require('path');
const exerciseRoutes = require('../routes/exercise-routes');

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public/index.html"))
});


  

router.use('/api/exercise', exerciseRoutes);

module.exports = router;

