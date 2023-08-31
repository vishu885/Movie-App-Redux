// {

//     type: "ADD_MOVIES",
//     movies:"[]"
// }
// {

// }
export const ADD_MOVIES="ADD_MOVIES";
export  function addMovies(movies){
    return {
        type:ADD_MOVIES,
        movies:movies
    }
}

export const ADD_FAV="ADD_FAV";
export  function addFav(movie){
    return {
        type:ADD_FAV,
        movie:movie
    }
}