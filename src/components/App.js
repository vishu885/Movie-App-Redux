import React from "react";
import Navbar from "./Navbar";
import Moviecard from "./Moviecard";
import { data } from "../data";
import { addMovies, switchTabs } from "../actions";
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

      changeTab=(val)=>{
            this.props.store.dispatch(switchTabs(val));
      }

render(){
    console.log("Rendered");
        const {list,favourites,showFav}=this.props.store.getState();
        const display=showFav?favourites:list;
    return(
        <div>
        <Navbar/>
        <div className="main">

            <div className="tabs">
                <div className={'tab ${showFav?" ":"active-tabs"}'} onClick={()=>this.changeTab(false)}>Movies</div>
                <div className={'tab ${showFav?"active-tabs ":""}'} onClick={()=>this.changeTab(true)}>Favourites</div>

            </div>

            
            <div className="list">
                {display.map((movie,index)=>
                    <Moviecard movie={movie}
                    key={`movies-${index}`}
                    dispatch={this.props.store.dispatch}
                    isFav={this.isFav(movie)}
                    />
                )}
            </div>
         {(display.length===0) ? <div className="no-movies"> NO MOVIES TO DISPLAY</div> : null} 
        </div>

        </div>
    );
}
}
export default App;