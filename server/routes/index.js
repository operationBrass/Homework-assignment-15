const router = require('express').Router();
const exerciseRoutes = require('./exercise-routes');


router.use('/', () => {"hi"});
router.use('/exercises', exerciseRoutes);

module.exports = router;
