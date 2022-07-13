const router = require('express').Router();
const { Review} = require('../../models');

// const newReview = 
const withAuth = require('../../utils/auth');

// route:   /api/reviews/

router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const reviewData = await Review.findAll({
       
      });
  
      // Serialize data so the template can read it
      const reviews = reviewData.map((Review) => Review.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('reviews', { 
        reviews 
        // logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });









router.post('/', withAuth, async (req, res) => {
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



module.exports = router;