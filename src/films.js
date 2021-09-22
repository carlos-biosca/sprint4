
// Exercise 1: Get the array of all directors.
function getAllDirectors (movies) {
  let result = [...movies.map(movie => movie.director)]
  console.log("EXERCICE 1 ->", result);

  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector (movies, director) {
  let result = [...movies.filter(movie => movie.director === director)]

  return result
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector (movies, director) {
  let scores = getMoviesFromDirector(movies, director).map(movie => movie.score)
  let result = scores.reduce((a, b) => a + b) / scores.length

  return result

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically (movies) {
  let result = [...movies.map(movie => movie.title)].sort().slice(0, 20)

  return result
}

// Exercise 5: Order by year, ascending
function orderByYear () {
  return []
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory () {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes () {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear () {

}



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
