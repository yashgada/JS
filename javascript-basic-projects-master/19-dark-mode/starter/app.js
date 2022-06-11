const toggleBtn = document.querySelector(".btn");
const articlesContainer = document.querySelector('.articles')

articlesContainer.innerHTML = articles.map(({title, date, length, snippet}) => {
    const formatDate = moment(date).format('MMMM Do, YYYY')
    // console.log(formatDate);
    return `
    <!-- single post -->
      <article class="post">
        <h2>${title}</h2>
        <div class="post-info">
          <span class="date">${formatDate}</span>
          <span class="read">${length} minute read</span>
        </div>
        <p>${snippet}</p>
      </article>
      <!-- end of single post -->
    `;
}).join('')

toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle('dark-theme')
  console.log("Hi there");
});
