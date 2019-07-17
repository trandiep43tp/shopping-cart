import React, { useState }  from 'react';
import { connect }          from 'react-redux';
import { act_buy_product, act_change_notify }  from '../redux/actions/index';
import Helper               from '../libs/Helper';
import Validate             from '../libs/Validate';
import * as configs         from '../redux/constants/config';

function ProductItem(props) {

	const item               = props.item;
	const [value, setValue ] = useState(1);
	
	function handleQuantityChange(e){		
		setValue(e.target.value);
	}

	function BuyProduct(){
		let quantity = + value;
		if(Validate.checkQuantity(quantity) === false){
			props.change_notify(configs.NOTI_GREATER_THAN_ONE)
		}else{
			props.clickBuyProduct(item, quantity);
			props.change_notify(configs.NOTI_BUY_PRODUCT_SUCCESS);
			
		}		
		setValue(1);
	}

	return (
		<div className="media product">
			<div className="media-left">
				<a href="#top">
					<img className="media-object" src={`images/${item.image}`} alt="charmander" />
				</a>
			</div>
			<div className="media-body">
				<h4 className="media-heading">{item.name}</h4>
				<p>{item.dicription}</p>
				 {showAreaBuy(item)}
			</div>
		</div>    
	)

	

	function showAreaBuy(product){
		let xhtml = null;
		let price = Helper.toCurrency(product.price, '$', 'right');
		if(product.canBy === false){
			xhtml = <span className ="price"> { price }</span>;
		}else{
			xhtml = <p>
						<input value = {value} onChange = { handleQuantityChange }  type="number"  min= {1} />						
						<button onClick = { BuyProduct }  className ="price"> { price} </button>
					</p>;
		}	
		
		return xhtml;
	}
}


const mapDispatchtoProps = ( dispatch ) =>{    
    return {
       clickBuyProduct: (product, quantity) =>{                  
          dispatch(act_buy_product( product, quantity));              
        },
        change_notify: (value)=>{            
            dispatch(act_change_notify(value));
        }
    }
  }

export default connect(null, mapDispatchtoProps ) (ProductItem);

