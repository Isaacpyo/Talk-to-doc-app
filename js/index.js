// DOM elements
const guideList = document.querySelector(".guides");

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
