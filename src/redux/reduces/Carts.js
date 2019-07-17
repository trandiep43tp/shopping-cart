
import _          from 'lodash';
import * as types from '../constants/actionType';

const cartLocal = JSON.parse( localStorage.getItem("carts"));
var initialState = (cartLocal !== null )? cartLocal : [];

const checkProduct = (carts, product) => {
    let total = carts.length;
    for( let i=0; i< total; i++){        
        if(carts[i].product.id === product.id ){
            return i;
        }        
    }
    return -1;
}

const carts  = (state = initialState, action) => {
    let { product, quantity } = action;   
    let check = -1;
    switch(action.type){
        case types.BUY_PRODUCT:
            check = checkProduct(state, action.product);
            if(check === -1){ //add
                state.push({product, quantity})
            }else{
                state[check].quantity += quantity;
            }           
           localStorage.setItem("carts", JSON.stringify(state));
            return [...state];
 
        case types.DELETE_CART:
            _.remove(state, (item)=> {	               	
                 return item.product.id === product.id;
            });
            localStorage.setItem("carts", JSON.stringify(state));
            return [...state];

        case types.UPDATE_CART:
            check = checkProduct(state, action.product);
            state[check].quantity = quantity;
            localStorage.setItem("carts", JSON.stringify(state));
            return [...state];
        default:
            return state;
    }    
}


export default carts;
