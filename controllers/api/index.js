const router = require('express').Router();
const userRoutes = require('./userRoutes');
const theaterRoutes = require('./theaterRoutes');
const reviewRoutes = require('./reviewRoutes');
const userInputRoutes = require('./userInputRoutes');

router.use('/users', userRoutes);
router.use('/theaters', theaterRoutes);
router.use('/reviews', reviewRoutes);
router.use('/input', userInputRoutes);

module.exports = router;
