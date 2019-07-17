import React       from 'react';
import { connect } from 'react-redux';
import _           from 'lodash';
import Helper      from '../libs/Helper';
import CartItem    from './CartItem';
import Notify      from './Notify';

function Carts(props) {
	let carts = props.carts;

	return (
		<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
			<div className="panel panel-danger"> 
				<div className="panel-heading"><h1 className="panel-title">Your Cart</h1></div> 
				<div className="panel-body">
					<table className="table">
						<thead>
							<tr>
								<th width="4%">#</th>
								<th>Pokemon</th>
								<th width="15%">Price</th>
								<th width="4%">Quantity</th>
								<th width="20%">Subtotal</th>
								<th width="25%">Action</th>
							</tr>
						</thead>
							{ showElementBody()}
						<tfoot id="my-cart-footer">							
							{ showElementFooter()}
							
						</tfoot>
					</table>
				</div>
			</div>
			< Notify />
		</div>	
	)

	function showElementBody(){		
		let xhtml = null;
		if(carts.length > 0){
		xhtml = carts.map((cart, index) => {
				return <CartItem cart = {cart} key = {index + cart.quantity} index = {index} /> //+ cart.quantity. nếu k có khi thay đổi quantity nó k load lại
			})
		}
		return <tbody id="my-cart-body">{xhtml}</tbody> ;
	}

	function showElementFooter(){
		let xhtml = <tr><th colSpan={6}>Empty product in your cart</th></tr>;
		if(carts.length >0){
			 //sử dụng lodash
			 let numberItem = _.sumBy(carts, 'quantity');
			 let sumPrice   = _.sumBy(carts, (item) =>{
					return item.product.price * item.quantity;
			 });
			xhtml = <tr>
						<td colSpan={4}>There are <b>{numberItem}</b> items in your shopping cart.</td>
						<td colSpan={2} className="total-price text-left">{Helper.toCurrency(sumPrice, "USD", "rigth")}</td>
					</tr>
		}
		return xhtml;
	}
}

const mapStateToProps = (state, ownProps) =>{    
	const { quantity } = ownProps
	console.log(quantity)
	return {
		carts: state.carts
	}
}

export default connect(mapStateToProps, null) (Carts);
