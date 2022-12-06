 // Get the modals
 var modal = document.getElementsByClassName("modal");
      
 // Get the button that opens the modal
 // var btn = document.getElementsByClassName("btn-primary");
 
 // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

function closePopup() {
  for (i = 0; i < modal.length; i++) {
    modal[i].style.display = "none";
  }
}
 
 // When the user clicks the button, open the modals
 var btns = document.querySelectorAll(".btn-primary");
 for (i = 0; i < modal.length; i++){
    btns[i].addEventListener('click', () => {
      modal[i].style.display = "block";
    })
 }
 /* btn[0].onclick = function() {
   modal[0].style.display = "block";
}
btn[1].onclick = function() {
  modal[1].style.display = "block";
}
btn[2].onclick = function() {
  modal[2].style.display = "block";
}
btn[3].onclick = function() {
  modal[3].style.display = "block";
} */
 
 // When the user clicks on <span> (x), close the modal
 // span.onclick = function() {
 //  modal.style.display = "none";
 //}
 
 // When the user clicks anywhere outside of the modals, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal[0].style.display = "none";
   }
 }
