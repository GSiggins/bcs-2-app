
const router = require('express').Router();
const { response } = require('express');
const sequelize = require('sequelize')
const { Review } = require('../../models');
const withAuth = require('../../utils/auth');


router.delete('/:id', withAuth, async (req, res) => {
    try {
        const reviewData = await Review.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!reviewData) {
            res.status(404).json({ message: 'This review cannot be deleted' });
            return;
        }

        res.status(200).json(reviewData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router; 