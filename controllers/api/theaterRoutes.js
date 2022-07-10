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

module.exports = router;
