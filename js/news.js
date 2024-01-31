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



function sharePage() {
  // Get the current page URL
  var currentURL = window.location.href;

  // Create a shareable link (you might use a service like AddToAny or a custom API for more advanced sharing)
  var shareableLink = 'https://example.com/share?url=' + encodeURIComponent(currentURL);

  // Open a new window or redirect the user to the shareable link
  window.open(shareableLink, '_blank');
}