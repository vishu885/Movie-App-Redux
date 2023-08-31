import { ADD_FAV, ADD_MOVIES } from "../actions";
const initialState={
    list:[],
    favourites:[]
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
    
        default: return state; // returns original state

                }
            }