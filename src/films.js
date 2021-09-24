
// Exercise 1: Get the array of all directors.
const getAllDirectors = (movies) => result = [...movies.map(movie => movie.director)]


// Exercise 2: Get the films of a certain director
const getMoviesFromDirector = (movies, director) => result = [...movies.filter(movie => movie.director === director)]


// Exercise 3: Calculate the average of the films of a given director.
const moviesAverageOfDirector = (movies, director) => {
  let scores = getMoviesFromDirector(movies, director).map(movie => movie.score)
  return result = scores.reduce((a, b) => a + b) / scores.length
}

// Exercise 4:  Alphabetic order by title 
const orderAlphabetically = (movies) => result = [...movies.map(movie => movie.title)].sort().slice(0, 20)


// Exercise 5: Order by year, ascending
const orderByYear = (movies) => result = [...movies.sort((a, b) => a.year > b.year ? 1 : -1)]


// Exercise 6: Calculate the average of the movies in a category
const moviesAverageByCategory = (movies, genre) => {
  let scores = [...movies.filter(movie => movie.genre.includes(genre) && movie.score !== '')].map(movie => movie.score)
  return result = scores.reduce((a, b) => a + b) / scores.length
}

// Exercise 7: Modify the duration of movies to minutes
const hoursToMinutes = (movies) => {
  let result = movies.map(movie => {
    let duration = movie.duration.toString()
    let indexHours = duration.indexOf('h')
    let indexMinutes = duration.indexOf('min')

    let hours = parseInt(duration.substr(0, indexHours).trim())

    let minutes = 0
    if (duration.indexOf('min') !== -1) {
      minutes = parseInt(duration.substr(indexHours + 1, indexMinutes).trim())
    }

    return movie = {
      duration: hours * 60 + minutes
    }
  })

  return result
}

// Exercise 8: Get the best film of a year
const bestFilmOfYear = (movies, year) => result = movies.filter(movie => movie.year === year).sort((a, b) => a.score < b.score ? 1 : -1).slice(0, 1)



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
