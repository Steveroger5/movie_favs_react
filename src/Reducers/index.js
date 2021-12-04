
let initialstate = {
    list : [],
    favorites : [],
    all : 1,
    fav : 0
}

export default function movies(state = initialstate,action){
    if(action.type === "ADD_MOVIES"){
        return {
            ...state,
            list : action.movies
        }
    }
    if(action.type === "ADD_FAV"){
        console.log("adding to fav");
        return{
            ...state,
            favorites : [action.movies,...state.favorites]
        }
    }
    if(action.type === "REMOVE_FAV"){
        console.log("removing the fav");
        let favs = state.favorites;
        let newfavs = []
        favs.map((movie)=>{
            if(movie==action.movies){
                console.log("found the culprit...");
            }
            else{
                newfavs.push(movie)
            }
        })
        return{
            ...state,
            favorites : newfavs
        }
    }
    if(action.type === "SHOW_ALL"){
        console.log("SHOW ME ALL...");
        return {
            ...state,
            all : 1
        }
    }
    if(action.type === "SHOW_FAV"){
        console.log("SHOW ME FAVS ONLY...");
        return {
            ...state,
            all : 0
        }
    }
    return state
}
