
const product = [
    {
        id        : '12345',
        name      : "aplusautomation",
        image     : "aplusautomation.jpg",
        dicription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",       
        price     : 12,
        canBy     : true
    },
    {
        id        : '1234567',
        name      : "aplus media",
        image     : "aplus-media.jpg",
        dicription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",       
        price     : 7,
        canBy     : true
    },
    {
        id        : '12345678',
        name      : "robo fig combo",
        image     : "robo_fig_combo.jpg",
        dicription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",       
        price     : 10,
        canBy     : false
    },
    {
        id        : '12345678',
        name      : "target leap frog",
        image     : "target-leap-frog.jpg",
        dicription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",       
        price     : 20,
        canBy     : true
    },

]
const itemsLocalSrorage  = JSON.parse(localStorage.getItem("products")) ;
const initialState       = (itemsLocalSrorage !== null )? itemsLocalSrorage : product;


var products  = (state = initialState, action) => {
   
    switch(action.type){              
        default:
            return state;
    }
    
}

export default products;
 