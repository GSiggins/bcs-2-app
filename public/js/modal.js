const form = $('#form')

const reviewText = $('#review-text').val().trim()
const theater = $('#theater-id')
const seating = $('#seating-rating')
const concessions = $('#concession-rating')
const audio = $('#audio-rating')
const video = $('#video-rating')
const parking = $('#parking-rating')
const service = $('#service-rating')
const crowd = $('#crowd-rating')
const submitBtn = $('#submit-btn')

// const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
// const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))

function reviewSubmit(event) {
    event.preventDefault();
    console.log('hello');
const userReview = {
theater_id: theater,
reviewtext: reviewText,
seatingrating: seating.val(),
concessionsrating: concessions.val(),
audiorating: audio.val(),
videorating: video.val(),
parkingrating: parking.val(),
servicerating: service.val(),
crowdrating: crowd.val(),
}
console.log(userReview)
}

//  /api/theater/:id
// fetch with userReview obj
// POST req


submitBtn.on('click', reviewSubmit)

module.exports = userReview;