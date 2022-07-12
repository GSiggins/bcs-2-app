const router = require('express').Router();
const { Theater } = require('../../models');
const withAuth = require('../../utils/auth');

// route:   /api/theaters/

// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newTheater = await Theater.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newTheater);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

const { Sequelize } = require('sequelize')
await Review.findAll({
    where: {
        theater_id: req.params.id
    },
    attributes: [
        [Sequelize.fn('AVG', Sequelize.cast(Sequelize.col('seatingrating'), 'integer')), 'avgSeatingRating'],
        [Sequelize.fn('AVG', Sequelize.cast(Sequelize.col('concessionsrating'), 'integer')), 'avgConcessionsRating'],
        [Sequelize.fn('AVG', Sequelize.cast(Sequelize.col('audiorating'), 'integer')), 'avgAudioRating'],
        [Sequelize.fn('AVG', Sequelize.cast(Sequelize.col('videorating'), 'integer')), 'avgVideoRating'],
        [Sequelize.fn('AVG', Sequelize.cast(Sequelize.col('parkingrating'), 'integer')), 'avgParkingRating'],
        [Sequelize.fn('AVG', Sequelize.cast(Sequelize.col('servicerating'), 'integer')), 'avgServiceRating'],
        [Sequelize.fn('AVG', Sequelize.cast(Sequelize.col('crowdrating'), 'integer')), 'avgCrowdRating'],

        [Sequelize.fn('AVG', Sequelize.cast(Sequelize.col('crowdrating', 'servicerating', 'parkingrating', 
        'videorating', 'audiorating', 'concessionsrating', 'seatingrating'), 
        'integer')), 'masterRating'],
    ]
});

module.exports = router;
