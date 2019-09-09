import * as types from '../actions/types';

const intialState = {
    status : "User"
}

const commonReducer =(state = intialState, action)=>{

    switch(action.type){

        case types.CHANGE_LOGIN_STATUS :{
                return {...state,status:action.payload};
        }
    
        default:
        return state;
    
    }

}

export default commonReducer;