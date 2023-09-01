import { ADD_FAV, ADD_MOVIES, REMOVE_FAV, SWITCH_TABS } from "../actions";
const initialState={
    list:[],
    favourites:[],
    showFav:false
}
export default function movies(state=initialState,action){
    // if(action.type===ADD_MOVIES)
    // {
    //     return {
    //         ...state,
    //         list:action.movies
    // }
    // }
    // return state;
    switch(action.type)
    {
    case ADD_MOVIES: return{ //returns new state
                            ...state,
                            list:action.movies
                        }
    case ADD_FAV:
                    return {
                        ...state,
                        favourites:[action.movie, ...state.favourites]
                    }

   case REMOVE_FAV:
    console.log("Title");

                        const filteredArray=state.favourites.filter((movie)=>
                        movie.Title!==action.movie.Title);
                        return {
                            ...state,
                            favourites:filteredArray
                        };
    

    case SWITCH_TABS: 
                            return{
                                ...state,
                                showFav:action.val
                            }
        default: return state; // returns original state

                }
            }