import React from 'react';
import {addfav,removefav} from "../Actions/index"

class MovieCard extends React.Component{
    handleClick = (event)=>{
        console.log("in the component",this.props.store.getState());
        const store = this.props.store
        const movie = store.getState().list[parseInt(event.target.id)]
        console.log("selected movie",movie);
        store.dispatch(addfav(movie))
        console.log("state",store.getState());
    }

    isfav = ()=>{
        const mymovie = this.props.movie;
        const store = this.props.store
        let flag = 0;
        let favs = store.getState().favorites
        favs.map((movie)=>{
            if(movie==mymovie){
                flag = 1;
                return true;
            }
        })
        if(flag){
            return true
        }
        return false;
    }

    handleUnfav = ()=>{
        const store = this.props.store;
        const movie = this.props.movie
        store.dispatch(removefav(movie))
    }

    render(){
        const { movie,index } = this.props;
        return(
            <div className="MovieCard">
                <div className="left">
                    <img src={movie.Poster} style={styles.img} alt={movie.Poster}></img>
                </div>
                <div className="right">
                    <div style={styles.title}>{movie.Title}</div>
                    <div style={styles.text}>{movie.Plot}</div>
                    <div className="cont">
                        <div style={styles.imdb}>IMDB Rating : {movie.imdbRating}</div>
                        {this.isfav()?<button className="btn-unfav" id={index} onClick={this.handleUnfav}>Unfavourite</button>
                        :<button className="btn-fav" onClick={this.handleClick} id={index}>Favourite</button>}
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;

const styles = {
    img : {
        height : "250px"
    },
    title : {
        fontWeight : "bold",
        letterSpacing : "2px",
        padding : "2%",
        fontSize : "1.7rem"
    },
    text : {
        textAlign : "justify",
        padding : "2%",
    },
    imdb : {
        paddingTop : "2%",
        paddingBottom : "2%",
        fontWeight : "bold",
        letterSpacing : "2px"
    }
}