import React from 'react';
import { connect }       from 'react-redux';
import ProductItem  from './ProductItem';

function Products(props) {

	let products = props.products;
	let elmProducts = products.map((item, index) =>{
		return <ProductItem key = {index} item = {item} />
	})
	
	return (
		<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
			<div className="panel panel-primary"> 
				<div className="panel-heading"><h1 className="panel-title">List Products</h1></div> 
				<div className="panel-body" id="list-product">          
					{ elmProducts}
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) =>{
    
    return {
		products: state.products
    }
}

export default connect(mapStateToProps, null) (Products);