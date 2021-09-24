"use strict";
let result;
// Exercise 1: Get the array of all directors.
const getAllDirectors = (movies) => result = [...movies.map((movie) => movie.director)];
// Exercise 2: Get the films of a certain director
const getMoviesFromDirector = (movies, searcheddirector) => result = [...movies.filter((movie) => movie.director === searcheddirector)];
// Exercise 3: Calculate the average of the films of a given director.
const moviesAverageOfDirector = (movies, searcheddirector) => {
    let scores = getMoviesFromDirector(movies, searcheddirector).map((movie) => movie.score);
    return result = scores.reduce((a, b) => a + b) / scores.length;
};
// Exercise 4:  Alphabetic order by title 
const orderAlphabetically = (movies) => result = [...movies.map((movie) => movie.title)].sort().slice(0, 20);
// Exercise 5: Order by year, ascending
const orderByYear = (movies) => result = [...movies.sort((a, b) => a.year > b.year ? 1 : -1)];
// Exercise 6: Calculate the average of the movies in a category
const moviesAverageByCategory = (movies, searchedGenre) => {
    let scores = [...movies.filter((movie) => movie.genre.includes(searchedGenre) && movie.score !== '')].map((movie) => movie.score);
    return result = scores.reduce((a, b) => a + b) / scores.length;
};
// Exercise 7: Modify the duration of movies to minutes
const hoursToMinutes = (movies) => {
    let result = movies.map((movie) => {
        let stringDuration = movie.duration;
        let indexHours = stringDuration.indexOf('h');
        let indexMinutes = stringDuration.indexOf('min');
        let hours = parseInt(stringDuration.substr(0, indexHours).trim());
        let minutes = 0;
        if (stringDuration.indexOf('min') !== -1) {
            minutes = parseInt(stringDuration.substr(indexHours + 1, indexMinutes).trim());
        }
        let newDuration = {
            duration: hours * 60 + minutes
        };
        return newDuration;
    });
    return result;
};
// Exercise 8: Get the best film of a year
const bestFilmOfYear = (movies, searchedYear) => result = movies.filter((movie) => movie.year === searchedYear).sort((a, b) => a.score < b.score ? 1 : -1).slice(0, 1);
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {
        getAllDirectors,
        getMoviesFromDirector,
        moviesAverageOfDirector,
        orderAlphabetically,
        orderByYear,
        moviesAverageByCategory,
        hoursToMinutes,
        bestFilmOfYear,
    };
}
