import { createStore } from 'redux';
import myReduces       from './reduces/index';


const store = createStore(myReduces);


export default store;