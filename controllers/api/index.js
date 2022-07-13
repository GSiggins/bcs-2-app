const router = require('express').Router();
const userRoutes = require('./userRoutes');
const theaterRoutes = require('./theaterRoutes');
<<<<<<< HEAD
const reviewRoutes = require('./reviewRoutes');
=======
const reviewRoutes = require('./reviews');
const userInputRoutes = require('./userInputRoutes');
>>>>>>> main

router.use('/users', userRoutes);
router.use('/theaters', theaterRoutes);
router.use('/reviews', reviewRoutes);


module.exports = router;
