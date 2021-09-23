
// Exercise 1: Get the array of all directors.
function getAllDirectors (movies) {
  let result = [...movies.map(movie => movie.director)]
  // console.log("EXERCICE 1 ->", result);

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
function orderByYear (movies) {
  let result = [...movies.sort((a, b) => {
    return a.year > b.year ? 1 : -1
  })]

  return result
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory (movies, genre) {
  let scores = [...movies.filter(movie => movie.genre.includes(genre) && movie.score !== '')].map(movie => movie.score)
  let result = scores.reduce((a, b) => a + b) / scores.length

  return result
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes (movies) {
  let newMovies = [...movies.map(movie => {
    let duration = movie.duration.toString()
    let indexHours = duration.indexOf('h')
    let indexMinutes = duration.indexOf('min')

    let hours = parseInt(duration.substr(0, indexHours).trim())

    let minutes = 0
    if (duration.indexOf('min') !== -1) {
      minutes = parseInt(duration.substr(indexHours + 1, indexMinutes).trim())
    }

    movie.duration = hours * 60 + minutes
    return movie
  })]
  console.log("EXERCICE 7 ->", newMovies);

  return newMovies
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear (movies, year) {
  let result = movies.filter(movie => movie.year === year).sort((a, b) => a.score < b.score ? 1 : -1).slice(0, 1)

  return result
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
