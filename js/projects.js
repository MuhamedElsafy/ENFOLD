// Get the button
var mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}




function showSection(sectionId) {
  // Hide all sections
  var sections = document.getElementsByClassName('content-section');
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.remove('show');
  }

  // Show the selected section
  var selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add('show');
}
