const router = require('express').Router();
const { Theater, User, Review } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('sequelize')


router.get('/', async (req, res) => {
  try {
    // Get all theaters and JOIN with user data
    const theaterData = await Theater.findAll({
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name'],
      //   },
      // ],
    });


    const theater = theaterData.map((theater) => theater.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      theater,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/theater/:id', async (req, res) => {
  try {
    const theaterAvgs = await Theater.findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: Review,
        attributes: [
          "reviewtext",
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
    }]
    });

    console.log(theaterAvgs);
        const theater = theaterAvgs.get({ plain: true });
    console.log(theater);
        res.render('theater', {
          ...theater,
          logged_in: req.session.logged_in
        });
        // res.json(theater)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/theaters', async (req, res) => {
  try {
    const theaterAvgs = await Theater.findAll({
      include: [{
        model: Review,
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
    }]
    });
        const theaters = theaterAvgs.map(theater => theater.get({ plain: true }))
        res.render('theaters', {
          theaters,
          logged_in: req.session.logged_in
        });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/homepage', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      // attributes: { exclude: ['password'] },
      // include: [{ model: Theater }],
    });

    const user = userData.get({ plain: true });

    res.render('homepage', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }

  res.render('login');
});

module.exports = router;
