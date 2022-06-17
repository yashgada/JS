import get from './getElement.js'
import { hideLoading } from './toggleLoading.js'

const displayDrinks = async ({drinks}) => {
    const section = get('.section-center')
    const title = get('.title')
    // drinks will be null, hence falsy if no drinks were returned in the response
    if (!drinks) {
        // todo hide loading
        hideLoading()
        title.textContent = `sorry, no drinks matched your search`
        section.innerHTML = null
        return;
    }
    const newDrinks = drinks.map((drink) => {
        // we need the name, image and ID for now
        const {idDrink:id,strDrink:name, strDrinkThumb:image} = drink
        return `<!-- single drink -->
        <a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
          </article>
        </a>
        <!-- end of single drink -->`;
    }).join('')
    //  hide loading
hideLoading()
    // Since drinks are found, title is set to empty
    title.textContent = ''
    // And section contents are set as per newDrinks
    section.innerHTML = newDrinks
    return section
}

export default displayDrinks;