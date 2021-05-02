export const API_KEY = 'AIzaSyAX0jWVk04HISNY1FWfwmZun-C_NfDw5YE';
export const MAIN_URL = 'www.googleapis.com/books/v1/volumes';

export const loadSearchBooks = (searchTerm = '') => {
	return fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${API_KEY}`
	)
		.then(response => response.json())
		.then(json => json.items);
};
