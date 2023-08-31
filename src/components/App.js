import React from "react";
import Navbar from "./Navbar";
import Moviecard from "./Moviecard";
import { data } from "../data";
import { addMovies } from "../actions";
class App extends React.Component{
    componentDidMount(){
        const {store}=this.props;
        //api call
        //dispatch action
        this.props.store.subscribe(()=>{
            console.log("UPDATED");
            this.forceUpdate();
            console.log("State",store.getState());

    })
        this.props.store.dispatch(addMovies(data));
        console.log("State",store.getState());
    }

    isFav=(movie)=>{
        const {favourites}=this.props.store.getState();
        const index=favourites.indexOf(movie);
        //console.log("INDEX",index);
        if(index!==-1)
        {
          return true;
        }
        return false;
      }

render(){
    console.log("Rendered");
        const {list,favourites}=this.props.store.getState();

    return(
        <div>
        <Navbar/>
        <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>

        </div>
        <div className="list">
            {list.map((movie,index)=>
                <Moviecard movie={movie}
                 key={`movies-${index}`}
                 dispatch={this.props.store.dispatch}
                 isFav={this.isFav(movie)}
                />
            )}
        </div>

        {/* <div className="list">
            {favourites.map((movie,index)=>
                <Moviecard movie={movie} key={`fov-${index}`}/>
            )}
        </div> */}

        </div>
    );
}
}
export default App;