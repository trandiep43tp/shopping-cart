import {combineReducers } from 'redux';
import products           from './Products';
import carts              from './Carts';
import notify             from './Notify';

const myReduces = combineReducers({
    products,
    carts,
    notify   
})

export default myReduces; 