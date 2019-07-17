//import * as configs     from './../redux/constrants/config';

class Helper {
       static toCurrency(value, currentcy, position = "left"){
        if(position ==="left"){
            return currentcy + " " + value;
        }else{
            return value + " " + currentcy;
        }
    }
}

export default Helper; 