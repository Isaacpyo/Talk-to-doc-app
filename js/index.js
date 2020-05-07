// DOM elements
const guideList = document.querySelector(".guides");
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const signOutLinks = document.querySelectorAll(".thank-you ");
const thankYouLinks = document.querySelectorAll(".signed-up");
const showNumber = document.querySelector(".show-number");
const hideNumber = document.querySelector(".hide-number");

const setupUI = (user) => {
  if (user) {
    // toggle user UI elements
    loggedInLinks.forEach((item) => (item.style.display = "block"));
    loggedOutLinks.forEach((item) => (item.style.display = "none"));
  } else {
    // toggle user elements
    loggedInLinks.forEach((item) => (item.style.display = "none"));
    loggedOutLinks.forEach((item) => (item.style.display = "block"));
  }
};

const sigUpUI = (user) => {
  if (user) {
    // toggle user UI elements
    signOutLinks.forEach((item) => (item.style.display = "block"));
    thankYouLinks.forEach((item) => (item.style.display = "none"));
  } else {
    // toggle user elements
    signOutLinks.forEach((item) => (item.style.display = "none"));
    thankYouLinks.forEach((item) => (item.style.display = "block"));
  }
};

// setup guides
const setupGuides = (data) => {
  let html = "";
  data.forEach((doc) => {
    const doctors = doc.data();
    console.log(doctors);
    const li = `
      <li>
        <div class="collapsible-header grey lighten-4"> ${doctors.categories} </div>
        <div class="collapsible-body white"> ${doctors.content} </div>
      </li>
    `;
    html += li;
  });
  guideList.innerHTML = html;
};

// setup materialize components
document.addEventListener("DOMContentLoaded", function () {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  var items = document.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});
