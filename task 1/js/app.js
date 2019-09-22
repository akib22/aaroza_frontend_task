import navbar from './views/components/navbar.js';
import home from './views/pages/home.js';
import countries from './views/pages/countries.js';
import country from './views/pages/country.js';
import about from './views/pages/about.js';
import contact from './views/pages/contact.js';
import error404 from './views/pages/error404.js';
import parseRequestURL from './views/util.js';

const routes = {
  '/': home,
  '/countries': countries,
  '/countries/:code': country,
  '/about': about,
  '/contact': contact,
};

const router = async () => {
  const header = null || document.getElementById('root-header');
  const content = null || document.getElementById('root-content');
  header.innerHTML = navbar.render();
  let request = parseRequestURL();
  let parsedURL =
    (request.resource ? '/' + request.resource : '/') +
    (request.id ? '/:code' : '') +
    (request.verb ? '/' + request.verb : '');
  let page = routes[parsedURL] ? routes[parsedURL] : error404;

  content.innerHTML = await page.render();
};

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
