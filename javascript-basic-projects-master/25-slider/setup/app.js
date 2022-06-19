import people from './data.js'

const container = document.querySelector('.slide-container')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')

// set slides
container.innerHTML = people.map((person,slideIndex) => {
    const {img, name, job, text} = person
    // more logic here
    let position = 'next'
    if (slideIndex === 0) {
        position = 'active';
    }
    if (slideIndex === people.length - 1) {
        position = 'last';
    }
    return `<article class="slide ${position}">
        <img src="${img}"
          alt="${name}" class="img">
        <h4>${name}</h4>
        <p class="title">${job}</p>
        <p class="text">${text}</p>
        <div class="quote-icon"><i class="fas fa-quote-right"></i></div>
      </article>`;
}).join('')

const startSlider = (type) => {
  const active = document.querySelector('.active')
  const last = document.querySelector('.last')
  // let 
  // select the next element from the active one
  let next = active.nextElementSibling || container.firstElementChild;
  console.log(next);
  active.classList.remove('active')
  last.classList.remove('last')
  next.classList.remove('next')
  
  if (type === 'prev') {
    active.classList.add('next')
    last.classList.add('active')
    next = last.previousElementSibling || container.lastElementChild
    next.classList.remove('next')
    next.classList.add('last')
    return
  }
  
  next.classList.add('active')
  active.classList.add('last')
  last.classList.add('next')
}
nextBtn.addEventListener('click', () => {
  startSlider()
})
prevBtn.addEventListener('click', () => {
  startSlider('prev')
})