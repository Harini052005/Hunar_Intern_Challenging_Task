
const apiKey = 'c31fbbdf'; // api key
const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=c31fbbdf&s=avengers`; 

const moviesContainer = document.getElementById('movies-container');

async function fetchMovies() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.Response === 'True') {
            displayMovies(data.Search);
        } else {
            moviesContainer.innerHTML = '<p>No movies found</p>';
        }
    } catch (error) {
        console.error('Error fetching movies:', error);
        moviesContainer.innerHTML = '<p>Failed to load movies</p>';
    }
}

function displayMovies(movies) {
    moviesContainer.innerHTML = ''; // Clear previous movies
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        
        movieElement.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        `;
        
        moviesContainer.appendChild(movieElement);
    });
}

// Fetch movies on page load
fetchMovies();
