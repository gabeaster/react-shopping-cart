import React from 'react';

// Components
import Product from './Product';


//Products is a function that brings in props and returns a div (.products-container) and maps thorugh our list of products and returns a Product Component for each item. Props use props.products and take in a product. 
//This needs to be refactored using ContextAPI

const Products = props => {
	return (
		<div className="products-container">
			{props.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
