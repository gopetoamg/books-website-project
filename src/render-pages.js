import { toHomeView } from './views/home-view.js';
import { MAIN } from '../src/constants.js';
import { toAboutView } from './views/about-view.js';
import { toSearchView } from './views/search-view.js';
import { loadSearchBooks } from './requests/requests.js';
import { toReadlstView } from './views/readlist-view.js';


export const loadPage = (page = '') => {
	switch (page) {
		case 'home':
			return renderHome();

		case 'readlist':
			return renderReadlist();

		case 'about':
			return renderAbout();

		default:
			return null;
	}
};

export const renderHome = () => {
	MAIN.innerHTML = toHomeView();
};

export const renderAbout = () => {
	MAIN.innerHTML = toAboutView();
};

export const renderReadlist = () => {
	MAIN.innerHTML = toReadlstView();
}

export const displaySearch = term => {
	loadSearchBooks(term).then(
		obj =>
			(MAIN.innerHTML = obj
				.map(item => {
					item = `
						<div class="content">
							<div class="content-display">
								<img src=${item.volumeInfo.imageLinks.thumbnail} alt="book cover">
								<div class="book-info">
									<h1>${item.volumeInfo.title}</h1>
									<h3>Author: ${item.volumeInfo.authors}</h3>
									<p>Ratings given: ${item.volumeInfo.ratingsCount} Average rating: ${item.volumeInfo.averageRating}</p>
									<p>Published on: ${item.volumeInfo.publishedDate} Page count: ${item.volumeInfo.pageCount}</p>
									<button class="btn btn-preview"><a href=${item.volumeInfo.previewLink} target="_blank"> Preview book</a></button>
									<button class="btn btn-preview">Add to Readlist</button>
								</div>
							</div>
						</div>
					`;
					return item;
				})
			)
	);
};

