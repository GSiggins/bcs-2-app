const router = require('express').Router();
const { response } = require('express');
const sequelize = require('sequelize')
const { Theater, Review } = require('../../models');
const withAuth = require('../../utils/auth');


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

