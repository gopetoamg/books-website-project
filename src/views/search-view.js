export const toSearchView = (book) => `
<div class="content">
    <div class="content-display">
        <img src=${item.volumeInfo.imageLinks.thumbnail} alt="book cover">
        <div class="book-info">
            <h1>${item.volumeInfo.title}</h1>
            <h3>Author: ${item.volumeInfo.authors}</h3>
            <p>Ratings given: ${item.volumeInfo.ratingsCount} Average rating: ${item.volumeInfo.averageRating}</p>
            <p>Published on: ${item.volumeInfo.publishedDate} Page count: ${item.volumeInfo.pageCount}</p>
            <button class="btn btn-preview"><a href=${item.volumeInfo.previewLink} target="_blank"> Preview book</a></button>
            <button class="btn btn-preview add-to-readlist">Add to Readlist</button>
        </div>
    </div>
</div>
`;