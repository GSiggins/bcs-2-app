
const router = require('express').Router();
const { response } = require('express');
const sequelize = require('sequelize')
const { Review } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:id', withAuth, async (req, res) => {
    try {
        const newReview = await Review.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newReview);
    } catch (err) {
        res.status(400).json(err);
    }
});

// route:   /api/reviews/:id

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const reviewData = await Review.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!reviewData) {
            res.status(404).json({ message: 'No project found with this id!' });
            return;
        }

        res.status(200).json(reviewData); 
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/:id', async (req, res) => {
    try {
        const seatingAvg = await Theater.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                [sequelize.literal(
                    '(SELECT AVG(seatingrating) FROM review)'
                ),
                    'avgSeatingRating'
                ],
                [sequelize.literal(
                    '(SELECT AVG(concessionsrating) FROM review)'
                ),
                    'avgConcessionsRating'
                ],
                [sequelize.literal(
                    '(SELECT AVG(audiorating) FROM review)'
                ),
                    'avgAudioRating'
                ],
                [sequelize.literal(
                    '(SELECT AVG(videorating) FROM review)'
                ),
                    'avgVideoRating'
                ],
                [sequelize.literal(
                    '(SELECT AVG(parkingrating) FROM review)'
                ),
                    'avgParkingRating'
                ],
                [sequelize.literal(
                    '(SELECT AVG(servicerating) FROM review)'
                ),
                    'avgServiceRating'
                ],
                [sequelize.literal(
                    '(SELECT AVG(crowdrating) FROM review)'
                ),
                    'avgCrowdRating'
                ],
                [sequelize.literal(
                    '(SELECT AVG(crowdrating + servicerating + parkingrating + videorating + audiorating + concessionsrating + seatingrating)/7 FROM review)'
                ),
                    'masterRating'
                ],
            ]
        })
        res.json(seatingAvg);
    } catch (err) {
        res.status(400).json(err);
    }
})




module.exports = router; 