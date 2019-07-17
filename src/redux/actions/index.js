import * as types from '../constants/actionType';

export const act_buy_product = (product, quantity) =>{
    return {
        type: types.BUY_PRODUCT,
        product,
        quantity
    }
}

export const act_change_notify = (notify) =>{
    return {
        type: types.CHANGE_NOTIFY,
        notify
    }
}

export const act_delete_cart = (product) =>{
    return{
        type: types.DELETE_CART,
        product
    }
}

export const act_update_cart = (product, quantity) =>{    
    return{
        type: types.UPDATE_CART,
        product,
        quantity
    }
}
