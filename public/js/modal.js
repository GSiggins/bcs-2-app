// const router = require("../../controllers/api/reviews");
// const { Review } = require("../../models");

// const form = $('#form')

// const reviewText = $('#review-text').val().trim()
// const theater = $('#theater-id')
// const seating = $('#seating-rating')
// const concessions = $('#concession-rating')
// const audio = $('#audio-rating')
// const video = $('#video-rating')
// const parking = $('#parking-rating')
// const service = $('#service-rating')
// const crowd = $('#crowd-rating')
// const submitBtn = $('#submit-btn')

// function reviewSubmit(event) {
//     event.preventDefault();
//     console.log('hello');
// const userReview = {
// theater_id: theater,
// reviewtext: reviewText,
// seatingrating: seating.val(),
// concessionsrating: concessions.val(),
// audiorating: audio.val(),
// videorating: video.val(),
// parkingrating: parking.val(),
// servicerating: service.val(),
// crowdrating: crowd.val(),
// }
// console.log(userReview)
// }

// router.POST

// myModal.addEventListener('hidden.bs.modal', event => {
//   // do something...
// })

// submitBtn.on('click', reviewSubmit)


const saveBtn = document.querySelector('#save-btn');
const reviewForm = document.querySelector('#review-form');
const theaterRating = document.querySelector('#theater-rating');
const seatingRating = document.querySelector('#seating-rating');
const concessionRating = document.querySelector('#concession-rating');
const audioRating = document.querySelector('#audio-rating');
const videoRating = document.querySelector('#video-rating');
const parkingRating = document.querySelector('#parking-rating');
const serviceRating = document.querySelector('#service-rating');
const crowdRating = document.querySelector('#crowd-rating');
const reviewText = document.querySelector('#review-text');
const theaterIdArr = window.location.href.split('/')
const theater_id = parseInt(theaterIdArr[theaterIdArr.length-1])
async function  submitReview(event) {
    event.preventDefault()
const theaterrating=parseInt(theaterRating.value);
const seatingrating=parseInt(seatingRating.value);
const concessionsrating=parseInt(concessionRating.value);
const audiorating=parseInt(audioRating.value);
const videorating=parseInt(videoRating.value);
const parkingrating=parseInt(parkingRating.value);
const servicerating=parseInt(serviceRating.value);
const crowdrating=parseInt(crowdRating.value);
const reviewtext=reviewText.value;


// router.post('/:id', async (req, res) => {
//   try {
//     const reviewData = JSON.stringify(
//       theater_id,
//       theaterrating, 
//       seatingrating, 
//       concessionsrating,
//       audiorating,
//       videorating,
//       parkingrating,
//       servicerating,
//       crowdrating,
//       reviewtext
//       )
//     const newReview = await Review.create(reviewData);
//     console.json(newReview);
//     res.status(200).json(newReview);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

}


saveBtn.addEventListener('click', submitReview)