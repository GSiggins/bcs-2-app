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
const theaterIdArr = window.location.split('/')
const theater_id = theaterIdArr[3]
function submitReview(event) {
    event.preventDefault
const theaterVal=theaterRating.value;
const seatingVal=seatingRating.value;
const concessionVal=concessionRating.value;
const audioVal=audioRating.value;
const videoVal=videoRating.value;
const parkingVal=parkingRating.value;
const serviceVal=serviceRating.value;
const crowdVal=crowdRating.value;
const reviewVal=reviewText.value;

console.log(theaterVal)
console.log(seatingVal)
console.log(concessionVal)
console.log(audioVal)
console.log(videoVal)
console.log(parkingVal)
console.log(serviceVal)
console.log(crowdVal)
console.log(reviewVal)
const response = await fetch(`/api/reviews`, {
    method: 'POST',
    body: JSON.stringify({ theater_id, theaterVal, seatingVal, concessionVal, audioVal, videoVal, parkingVal, serviceVal, crowdVal, reviewVal }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if(response.ok){
      console.log('worked')

  }
}


saveBtn.addEventListener('click', submitReview)