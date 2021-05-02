import {loadPage} from './render-pages.js';
import {displaySearch} from './render-pages.js';
import { manageLocaleStorage } from './readlist.js';

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-link')) {
        loadPage(e.target.getAttribute('data-page'));
        e.preventDefault();
      }
      const currentSearch = document.getElementById('search-term').value;
      if (e.target.id === 'search-btn') {
      displaySearch(currentSearch);
      }
    });

    loadPage('home');
});
