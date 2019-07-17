import React, { useState, useEffect } from 'react';
import { connect }                    from 'react-redux';
import Helper                         from '../libs/Helper';
import Validate                       from '../libs/Validate';
import { act_delete_cart, act_change_notify, act_update_cart }            from '../redux/actions/index';
import * as configs                   from '../redux/constants/config';

function CartItem(props) {
	
	let [quantity, setQuantity ] = useState(0);
	let {product }               = props.cart;
	let index                    = props.index;	
	let totalMoney               = product.price * quantity;

	useEffect( () =>{
		//console.log("aaaa")
		setQuantity(props.cart.quantity)
	},[props.cart.quantity]);

	function handleChangeQuanlity(e){
		setQuantity(e.target.value );
	}
	
	function handleDelete(){
		let check = window.confirm(" Có chắc chắn muốn xóa?");
		if(check){
			props.clickDeleteCart(product);
			props.change_notify("Bạn đã xóa sp thành công.");
		}
	}

	function handleEdit(){		
		let number =  +quantity;
		if(Validate.checkQuantity(number) === false){
			props.change_notify(configs.NOTI_GREATER_THAN_ONE)
		}else{
			props.clickUpdateCart(product,number);
			props.change_notify(configs.NOTI_UPDATE_PRODUCT_SUCCESS)
		}			
	}

 	return (
		<tr>
			<th scope="row">{index + 1}</th>
			<td>{product.name}</td>
			<td>{ Helper.toCurrency(product.price, "USD", "rigth")}</td>
			<td><input type="number" value = {quantity} onChange = { handleChangeQuanlity} min={1} /></td>
			<td><strong>{Helper.toCurrency(totalMoney, "USD", "rigth")}</strong></td>
			<td>
				<button className="label label-info update-cart-item" onClick = { handleEdit}  >Update</button>
				<button className="label label-danger delete-cart-item" onClick = { handleDelete}  >Delete</button>
			</td>
		</tr> 
 	)
}

const mapDispatchtoProps = ( dispatch ) =>{    
    return {
       clickDeleteCart: (product) =>{                  
          dispatch(act_delete_cart( product ));              
		},
		clickUpdateCart: (product, quantity) =>{
			dispatch(act_update_cart(product, quantity))
		},
        change_notify: (value)=>{            
            dispatch(act_change_notify(value));
        }
    }
  }

export default connect(null, mapDispatchtoProps ) (CartItem);
