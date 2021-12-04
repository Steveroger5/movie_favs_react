// {
//     type : "ADD_MOVIES",
//     movies : []
// }


//action types
export const ADD_MOVIES = "ADD_MOVIES"
export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"

//action creators
export function addmovies (movies){
    return {
        type : ADD_MOVIES,
        movies : movies
    }
}

export function addfav (movie){
    return {
        type : ADD_FAV,
        movies : movie
    }
}

export function removefav (movie){
    return {
        type : REMOVE_FAV,
        movies : movie
    }
}