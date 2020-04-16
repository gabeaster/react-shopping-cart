//import useContext hook
import React, { useContext } from 'react';

// Components
import Product from './Product';
//import Context used
import { ProductContext } from '../contexts/ProductContext';


//Products is a function that brings in props and returns a div (.products-container) and maps thorugh our list of products and returns a Product Component for each item. Props use props.products and take in a product. 
//This needs to be refactored using ContextAPI



const Products = () => {
	//pass in Context object we want to use. Because we have two context values, we will destructure them in the const. 
	const { products, addItem } = useContext(ProductContext);

	return (
		<div className="products-container">
			{/* refactor by removing "props" from the function parameters, the products map, and the addItem prop */}
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
