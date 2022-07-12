// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// $('#exampleModal').on('shown.bs.modal', function (event){
//   var button = $(event.relatedTarget)
//   var recipient = button.data('')

//   var modal = $(this)
//   modal.find('.modal-title').text('New mesage to ' + recipient)
//   modal.find('.modal-body input').val(recipient)
// })

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

// Get the modal
var modal = document.getElementById("reviewModal");


// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

