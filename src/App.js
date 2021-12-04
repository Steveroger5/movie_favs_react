import Navbar from './Components/Navbar'
import data from './Components/Data'
import MovieCard  from './Components/MovieCard';
import React from 'react';
import {addmovies} from './Actions/index'

class App extends React.Component{

  componentDidMount(){
    const {store} = this.props
    store.subscribe(()=>{
      this.forceUpdate()
    })
    console.log(store.getState());
    store.dispatch(addmovies(data))
    
    console.log(store.getState());
  }

  handleAllMovies = ()=>{
    const store = this.props.store
    store.dispatch({
      type : "SHOW_ALL",
    })
  }

  handlefavs = ()=>{
    const store = this.props.store
    store.dispatch({
      type : "SHOW_FAV"
    })
  }

  render(){
    const store = this.props.store
    let all = store.getState().all
    let movies;
    if(all){
      movies = store.getState().list  
    }
    else{
      movies = store.getState().favorites  
    }
    console.log("State",store.getState())
    return (
      <div className="App">
        <Navbar/>
        <div className="tabs">
          <div className="left-tab">
            <button className="all-movies" onClick={this.handleAllMovies}>All Movies</button>
          </div>
          <div className="right-tab">
            <button className="fav" onClick={this.handlefavs}>Favourites</button>
          </div>
        </div>
        {movies.map((movie,index)=>(
          <MovieCard movie={movie} key={index} index = {index} store={this.props.store}/>
        ))}
      </div>
    );
  }
}

export default App;
