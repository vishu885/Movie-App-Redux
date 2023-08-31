import React from "react";
import { addFav } from "../actions";
class Moviecard extends React.Component {
    handleAddFav=()=>{
      const {movie}=this.props;

      this.props.dispatch(addFav(movie));
    }

    handleRemoveFav=()=>{}

   
    render(){
        const {movie,isFav}=this.props;

  return (
    <div className="movie-card">
      <div className="left">
        <img alt="Movie_Poster" src={movie.Poster}/>
      </div>
      <div className="right">
        <div className="title">{movie.Title}</div>
        <div className="plot">{movie.Plot}</div>
        <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {
             
              isFav?
            
              <button className="unfavourite-btn" onClick={this.handleRemoveFav}>unfavourite</button>
              : 
              <button className="favourite-btn" onClick={this.handleAddFav}>Favourite</button>

            }
        </div>


      </div>

    </div>
  );
}
}

export default Moviecard;
