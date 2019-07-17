
import * as types from '../constants/actionType';
import * as configs from '../constants/config';

var initialNotify = configs.NOTI_READLY_TO_BUY;

var notify  = (state = initialNotify, action) => {  
    switch(action.type){   
        case types.CHANGE_NOTIFY:
            state = action.notify;
            return state;
        default:
            return state;
    }    
}


export default notify;
