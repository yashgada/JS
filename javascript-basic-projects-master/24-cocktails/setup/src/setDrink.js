// The reason why we take section as an input, is because by going that route, we ensure the section is indeed created and loaded after all those async operations. This is not needed here, as there is nothing async in there. Just an example for future use
const setDrink = (section) => {
  section.addEventListener("click", (e) => {
    //   e.preventDefault();
      const id = e.target.parentElement.dataset.id;
    // console.log(e.target.parentElement.dataset.id);
    localStorage.setItem("drink",id)
  });
};

export default setDrink;