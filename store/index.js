export const state = () => ({
  arrayMovies: [
        {
        name: "Avatar: The Way of Water",
        link: "https://i.ibb.co/PjB95Lr/movie1.jpg",
        genre: "Science Fiction",
        year: 2022,
        review: "Avatar: The Way of Water",
        },
        {
        name: "Insidious 1",
        link: "https://i.ibb.co/vh30y4P/movie2.jpg",
        genre: "Horror",
        year: 2010,
        review: "Insidious 1",
        },
        {
        name: "Jumanji: The Next Level",
        link: "https://i.ibb.co/SKjMVJK/movie5.jpg",
        genre: "Adventure",
        year: 2019,
        review: "Jumanji: The Next Level",
        },
        {
        name: "Avengers: Infinity War",
        link: "https://i.ibb.co/Tg5rkBj/movie6.jpg",
        genre: "Action",
        year: 2018,
        review: "Avengers: Infinity War",
        },
        {
        name: "Avengers: Infinity War",
        link: "https://i.ibb.co/Tg5rkBj/movie6.jpg",
        genre: "Action",
        year: 2018,
        review: "Avengers: Infinity War",
        },
        {
        name: "Avengers: Infinity War",
        link: "https://i.ibb.co/Tg5rkBj/movie6.jpg",
        genre: "Action",
        year: 2018,
        review: "Avengers: Infinity War",
        },
  ],
  arrayGenres: [
    'All', 'Actions', 'Science Fiction', 'Horror', 'Thriller', 'Comedy', 'Romance', 'Adventure', 'Fantasy'
  ],
});


export const getters = {
    movieData(state){
        return state.arrayMovies
    },

    genreData(state){
        return state.arrayGenres
    },

    lastIdMovie(state){
        let movieLength = state.arrayMovies.length
        return state.arrayMovies[movieLength - 1].id
    }
}


export const mutations = {
    addNewMovie(state, payload){
        return state.arrayMovies.push(payload)
    }
}


export const actions = {

}