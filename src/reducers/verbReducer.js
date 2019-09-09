import * as types from '../actions/types';

const intialState = {
    addNew:false
}

const verbReducer =(state = intialState, action)=>{

    switch(action.type){

        case types.Add_NEW_VERB :{
                return {...state,addNew:action.payload};
        }
    

        default:
        return state;
    
    }

}

export default verbReducer;