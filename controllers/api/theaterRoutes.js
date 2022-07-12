const router = require('express').Router();
const { Theater, Review } = require('../../models');
const withAuth = require('../../utils/auth');

// route:   /api/theater/12

router.get('/:id', withAuth, async (req, res) => {
    try {
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
        let ratingsArray = [];
        const avgSeatingRating = await Review.findOne({
            where: { name: 'avgSeatingRating' }
        });
        if (!avgSeatingRating) {
            console.log(err)
        } else {
            ratingsArray.push(avgSeatingRating);
        }

        const avgConcessionsRating = await Review.findOne({
            where: { name: 'avgConcessionsRating' }
        });
        if (!avgConcessionsRating) {
            console.log(err)
        } else {
            ratingsArray.push(avgConcessionsRating);
        }

        const avgAudioRating = await Review.findOne({
            where: { name: 'avgAudioRating' }
        });
        if (!avgAudioRating) {
            console.log(err)
        } else {
            ratingsArray.push(avgAudioRating);
        }

        const avgVideoRating = await Review.findOne({
            where: { name: 'avgVideoRating' }
        });
        if (!avgVideoRating) {
            console.log(err)
        } else {
            ratingsArray.push(avgVideoRating);
        }

        const avgParkingRating = await Review.findOne({
            where: { name: 'avgParkingRating' }
        });
        if (!avgParkingRating) {
            console.log(err)
        } else {
            ratingsArray.push(avgParkingRating);
        }

        const avgServiceRating = await Review.findOne({
            where: { name: 'avgServiceRating' }
        });
        if (!avgServiceRating) {
            console.log(err)
        } else {
            ratingsArray.push(avgServiceRating);
        }
    } catch (err) {
        res.status(400).json(err);
    }
    console.log(ratingsArray);
    return ratingsArray;
})

module.exports = router;