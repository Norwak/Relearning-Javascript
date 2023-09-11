const global = {
  currentPage: window.location.pathname,
  search: {
    term: '',
    type: '',
    page: 1,
    totalPages: 1,
    totalResults: 0
  },
  api: {
    apiKey: '94e0a1ac19970796baf217f478b1cbcc',
    apiURL: 'https://api.themoviedb.org/3/',
  }
};



function showSpinner() {
  document.querySelector('.spinner').classList.add('show');
}

function hideSpinner() {
  document.querySelector('.spinner').classList.remove('show');
}



// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  showSpinner();

  const response = await fetch(`${global.api.apiURL}${endpoint}?api_key=${global.api.apiKey}&language=ru`);

  const data = await response.json();

  hideSpinner();

  return data;
}



// Search data in TMDB API
async function searchAPIData() {
  showSpinner();

  const response = await fetch(`${global.api.apiURL}search/${global.search.type}?api_key=${global.api.apiKey}&language=ru&query=${global.search.term}&page=${global.search.page}`);

  const data = await response.json();

  hideSpinner();

  return data;
}



// Show Custom Alert
function showAlert(message, className = 'error') {
  const alertEl = document.createElement('DIV');
  alertEl.classList.add('alert', className);
  alertEl.appendChild(document.createTextNode(message));
  document.querySelector('#alert').appendChild(alertEl);

  setTimeout(() => alertEl.remove(), 3000);
}



function initSwiper() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteration: false
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    }
  });
}

// Display Slider Movies
async function displaySlider() {
  const { results } = await fetchAPIData('movie/now_playing');

  for (const movie of results) {
    const div = document.createElement('DIV');
    div.classList.add('swiper-slide');

    div.innerHTML = `
    <a href="movie-details.html?id=${movie.id}">
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
    </a>
    <h4 class="swiper-rating">
      <i class="fas fa-star text-secondary"></i> ${movie.vote_average} / 10
    </h4>`;

    document.querySelector('.swiper-wrapper').appendChild(div);
    
    initSwiper();
  }
}



// Display 20 most popular movies
async function displayPopularMovies() {
  const { results } = await fetchAPIData('movie/popular');
  
  for (const movie of results) {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
      <a href="movie-details.html?id=${movie.id}">
        ${
          movie.poster_path
          ? `<img
          src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
          class="card-img-top"
          alt="${movie.title}"
          />`
          : `<img
          src="images/no-image.jpg"
          class="card-img-top"
          alt="${movie.title}"
          />`
        }
      </a>
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">
          <small class="text-muted">Release: ${movie.release_date}</small>
        </p>
      </div>
    `;

    document.querySelector('#popular-movies').appendChild(div);
  }
}

// Display 20 most popular TV shows
async function displayPopularShows() {
  const { results } = await fetchAPIData('tv/popular');
  
  for (const show of results) {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
      <a href="tv-details.html?id=${show.id}">
        ${
          show.poster_path
          ? `<img
          src="https://image.tmdb.org/t/p/w500${show.poster_path}"
          class="card-img-top"
          alt="${show.name}"
          />`
          : `<img
          src="images/no-image.jpg"
          class="card-img-top"
          alt="${show.name}"
          />`
        }
      </a>
      <div class="card-body">
        <h5 class="card-title">${show.name}</h5>
        <p class="card-text">
          <small class="text-muted">Release: ${show.first_air_date}</small>
        </p>
      </div>
    `;

    document.querySelector('#popular-shows').appendChild(div);
  }
}



function formatMoney(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayBackgroundImage(type, path) {
  const overlayDiv = document.createElement('DIV');
  overlayDiv.classList.add('overlay');
  overlayDiv.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${path}')`;

  if (type === 'movie') {
    document.getElementById('movie-details').appendChild(overlayDiv);
  } else {
    document.getElementById('show-details').appendChild(overlayDiv);
  }
}



// Display movie details
async function displayMovieDetails() {
  let queryString = window.location.search;
  if (queryString.length === 0) return false;

  queryString = queryString.slice(1);
  const queryArr = queryString.split('&');
  
  let movieID = false;
  for (const param of queryArr) {
    if (param.slice(0, 2) === 'id') {
      movieID = param.split('=')[1];
    }
  }

  const movie = await fetchAPIData(`movie/${movieID}`);
  
  displayBackgroundImage('movie', movie.backdrop_path);

  const div = document.createElement('div');
  div.innerHTML = `
  <div class="details-top">
    <div>
      ${
        movie.poster_path
        ? `<img
        src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
        class="card-img-top"
        alt="${movie.title}"
        />`
        : `<img
        src="images/no-image.jpg"
        class="card-img-top"
        alt="${movie.title}"
        />`
      }
    </div>
    <div>
      <h2>${movie.title}</h2>
      <p>
        <i class="fas fa-star text-primary"></i>
        ${movie.vote_average.toFixed(1)} / 10
      </p>
      <p class="text-muted">Release Date: ${movie.release_date}</p>
      <p>
        ${movie.overview}
      </p>
      <h5>Genres</h5>
      <ul class="list-group">
        ${movie.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
      </ul>
      ${
        movie.homepage
        ? `<a href="${movie.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>`
        : ''
      }
    </div>
  </div>
  <div class="details-bottom">
    <h2>Movie Info</h2>
    <ul>
      <li><span class="text-secondary">Budget:</span> $${formatMoney(movie.budget)}</li>
      <li><span class="text-secondary">Revenue:</span> $${formatMoney(movie.revenue)}</li>
      <li><span class="text-secondary">Runtime:</span> ${movie.runtime} minutes</li>
      <li><span class="text-secondary">Status:</span> ${movie.status}</li>
    </ul>
    <h4>Production Companies</h4>
    <div class="list-group">${movie.production_companies.map((company) => `<span>${company.name}</span>`).join(', ')}</div>
  </div>`;

  document.querySelector('#movie-details').appendChild(div);
}


// Display show details
async function displayShowDetails() {
  let queryString = window.location.search;
  if (queryString.length === 0) return false;

  queryString = queryString.slice(1);
  const queryArr = queryString.split('&');
  
  let showID = false;
  for (const param of queryArr) {
    if (param.slice(0, 2) === 'id') {
      showID = param.split('=')[1];
    }
  }

  const show = await fetchAPIData(`tv/${showID}`);
  
  displayBackgroundImage('tv', show.backdrop_path);

  const div = document.createElement('div');
  div.innerHTML = `
  <div class="details-top">
    <div>
      ${
        show.poster_path
        ? `<img
        src="https://image.tmdb.org/t/p/w500${show.poster_path}"
        class="card-img-top"
        alt="${show.name}"
        />`
        : `<img
        src="images/no-image.jpg"
        class="card-img-top"
        alt="${show.name}"
        />`
      }
    </div>
    <div>
      <h2>${show.name}</h2>
      <p>
        <i class="fas fa-star text-primary"></i>
        ${show.vote_average.toFixed(1)} / 10
      </p>
      <p class="text-muted">Last Air Date: ${show.last_air_date}</p>
      <p>
        ${show.overview}
      </p>
      <h5>Genres</h5>
      <ul class="list-group">
        ${show.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
      </ul>
      ${
        show.homepage
        ? `<a href="${show.homepage}" target="_blank" class="btn">Visit Show Homepage</a>`
        : ''
      }
    </div>
  </div>
  <div class="details-bottom">
    <h2>Movie Info</h2>
    <ul>
      <li><span class="text-secondary">Number of Episodes:</span> ${show.number_of_episodes}</li>
      <li><span class="text-secondary">Last Episode to Air:</span> ${show.last_episode_to_air.name}</li>
      <li><span class="text-secondary">Status:</span> ${show.status}</li>
    </ul>
    <h4>Production Companies</h4>
    <div class="list-group">${show.production_companies.map((company) => `<span>${company.name}</span>`).join(', ')}</div>
  </div>`;

  document.querySelector('#show-details').appendChild(div);
}



function displayPagination() {
  const paginationEl = document.getElementById('pagination');
  paginationEl.innerHTML = `
  <div class="pagination">
    <button class="btn btn-primary" id="prev">Prev</button>
    <button class="btn btn-primary" id="next">Next</button>
    <div class="page-counter">Page ${global.search.page} of ${global.search.totalPages}</div>
  </div>
  `;

  if (global.search.page === 1) {
    document.getElementById('prev').setAttribute('disabled', 'true');
  }

  if (global.search.page === global.search.totalPages) {
    document.getElementById('next').setAttribute('disabled', 'true');
  }

  document.getElementById('prev').addEventListener('click', async function() {
    global.search.page--;
    const { results, total_pages } = await searchAPIData();
    displaySearchResults(results);
  });

  document.getElementById('next').addEventListener('click', async function() {
    global.search.page++;
    const { results, total_pages } = await searchAPIData();
    displaySearchResults(results);
  });
}



function displaySearchResults(results) {
  document.getElementById('search-results').innerHTML = '';
  document.getElementById('search-results-heading').innerHTML = '';

  for (const result of results) {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
      <a href="${global.search.type}-details.html?id=${result.id}">
        ${
          result.poster_path
          ? `<img
          src="https://image.tmdb.org/t/p/w500${result.poster_path}"
          class="card-img-top"
          alt="${global.search.type === 'movie' ? result.title : result.name}"
          />`
          : `<img
          src="images/no-image.jpg"
          class="card-img-top"
          alt="${global.search.type === 'movie' ? result.title : result.name}"
          />`
        }
      </a>
      <div class="card-body">
        <h5 class="card-title">${global.search.type === 'movie' ? result.title : result.name}</h5>
        <p class="card-text">
          <small class="text-muted">Release: ${global.search.type === 'movie' ? result.release_date : result.first_air_date}</small>
        </p>
      </div>
    `;

    document.getElementById('search-results-heading').innerHTML = `
    <h2>${results.length} of ${global.search.totalResults} results for ${global.search.term}</h2>
    `;

    displayPagination();

    document.querySelector('#search-results').appendChild(div);
  }
}



// Search Movies/Shows
async function search() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  global.search.type = urlParams.get('type');
  global.search.term = urlParams.get('search-term');

  if (global.search.term !== '' && global.search.term !== null) {
    const { results, total_pages, page, total_results } = await searchAPIData();
    
    if (results.length === 0) {
      showAlert('No results found');
      return;
    };

    global.search.page = page;
    global.search.totalPages = total_pages;
    global.search.totalResults = total_results;

    displaySearchResults(results);

    document.querySelector('#search-term').value = '';

  } else {
    showAlert('Please enter search term');
  }
}



// Highlight active link
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  for (const link of links) {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  }
}



// Init App
function init() {
  switch (global.currentPage) {

    case '/':
    case '/index.html':
      displaySlider();
      displayPopularMovies();
      break;

    case '/shows.html':
      displayPopularShows();
      break;

    case '/movie-details.html':
      displayMovieDetails();
      break;

    case '/tv-details.html':
      displayShowDetails();
      break;

    case '/search.html':
      search();
      break;

  }

  highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);