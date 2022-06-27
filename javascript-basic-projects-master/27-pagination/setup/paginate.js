const paginate = (followers) => {
    const itemsPerPage = 9
    const numberOfPages = Math.ceil(followers.length/ itemsPerPage)
    console.log(numberOfPages);
    const pages = Array.from({ length: numberOfPages }, (_, index)=> {
        const start = index * itemsPerPage
        return followers.slice(start, start+itemsPerPage);
    })
    return pages
}

export default paginate
