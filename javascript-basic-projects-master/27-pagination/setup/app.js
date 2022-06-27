import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";

const title = document.querySelector(".section-title h1");
const btnContainer = document.querySelector(".btn-container");

let index = 0;
let pages = [];

const setupUI = () => {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
    console.log('rendered');
};

const init = async () => {
  const followers = await fetchFollowers();
  // displayFollowers(paginate(followers)[0])
  title.textContent = "Pagination";

  pages = paginate(followers);
  console.log(pages);
  setupUI();
};

btnContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("page-btn")) {
    console.log(e.target.dataset.index);
    index = parseInt(e.target.dataset.index);
    displayButtons(btnContainer, pages, index);
    setupUI();
  }
    if (e.target.classList.contains('next-btn')){
        index++
        if (index>pages.length-1) {
            index = 0
        }
        console.log('next');
        setupUI()
    }
    if (e.target.classList.contains('prev-btn')){
        index--
        if (index<0) {
            index = pages.length-1
        }
        console.log('prev');
        setupUI()
    }
});

window.addEventListener("load", init);
