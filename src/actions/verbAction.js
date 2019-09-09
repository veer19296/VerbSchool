import * as types from './types';
import { Actions } from 'react-native-router-flux';


export const addNewVerb = (flag) =>({
    type: types.Add_NEW_VERB,
    payload: flag
})

