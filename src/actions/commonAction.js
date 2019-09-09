import * as types from './types';
import { Actions } from 'react-native-router-flux';


export const changeLoginStatus = (state) =>({
    type: types.CHANGE_LOGIN_STATUS,
    payload:state
})

