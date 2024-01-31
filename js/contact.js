// Get the button
var mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
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

var agentNameInput = document.getElementById("agentName");
var agentSubjectInput = document.getElementById("agentSubject");
var agentEmailInput = document.getElementById("agentEmail");
var agentBudgetInput = document.getElementById("agentBudget");
var agentMassInput = document.getElementById("agentMass");
var addBtn = document.getElementById("addBtn");
var inputs = document.getElementsByClassName("d-block");
var agents = [];

addBtn.onclick = function () {
  getAgent();
  clearForm()
};
  

function getAgent(){
  var agent = {
    name: agentNameInput.value,
    subject: agentSubjectInput.value,
    email: agentEmailInput.value,
    budget: agentBudgetInput.value,
    massage: agentMassInput.value,
  };
  agents.push(agent);
  localStorage.setItem("agentList",JSON.stringify(agents));
}

function clearForm() {
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}
