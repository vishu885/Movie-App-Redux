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
    })
        this.props.store.dispatch(addMovies(data));
        console.log("State",store.getState());
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
                <Moviecard movie={movie} key={`movies-${index}`}/>
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