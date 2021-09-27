type movie = {
  director: string
  title: string
  score: number
  genre: string[]
  duration: string
  year: number
}

// Exercise 1: Get the array of all directors.
const getAllDirectors = (movies: []) => [...movies.map((movie: movie) => movie.director)]


// Exercise 2: Get the films of a certain director
const getMoviesFromDirector = (movies: [], searcheddirector: string) => [...movies.filter((movie: movie) => movie.director === searcheddirector)]


// Exercise 3: Calculate the average of the films of a given director.
const moviesAverageOfDirector = (movies: [], searcheddirector: string) => {
  let scores = getMoviesFromDirector(movies, searcheddirector).map((movie: movie) => movie.score)
  return scores.reduce((a, b) => a + b) / scores.length
}

// Exercise 4:  Alphabetic order by title 
const orderAlphabetically = (movies: []) => [...movies.map((movie: movie) => movie.title)].sort().slice(0, 20)


// Exercise 5: Order by year, ascending
const orderByYear = (movies: []) => [...movies.sort((a: movie, b: movie) => a.year > b.year ? 1 : -1)]


// Exercise 6: Calculate the average of the movies in a category
const moviesAverageByCategory = (movies: [], searchedGenre: string) => {
  let scores = [...movies.filter((movie: movie) => movie.genre.includes(searchedGenre) && typeof movie.score !== 'string')].map((movie: movie) => movie.score)
  return scores.reduce((a, b) => a + b) / scores.length
}

// Exercise 7: Modify the duration of movies to minutes
const hoursToMinutes = (movies: []) => {
  let result = movies.map((movie: movie) => {
    let stringDuration: string = movie.duration
    let indexHours = stringDuration.indexOf('h')
    let indexMinutes = stringDuration.indexOf('min')

    let hours = parseInt(stringDuration.substr(0, indexHours).trim())

    let minutes = 0
    if (stringDuration.indexOf('min') !== -1) {
      minutes = parseInt(stringDuration.substr(indexHours + 1, indexMinutes).trim())
    }

    let newDuration: object = {
      duration: hours * 60 + minutes
    }
    return newDuration
  })

  return result
}

// Exercise 8: Get the best film of a year
const bestFilmOfYear = (movies: [], searchedYear: number) => movies.filter((movie: movie) => movie.year === searchedYear).sort((a: movie, b: movie) => a.score < b.score ? 1 : -1).slice(0, 1)



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
