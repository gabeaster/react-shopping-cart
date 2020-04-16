import React from 'react';


//Production is a funciton that pulls in props and returns a div (.product) and renders an img, h1, p, and button that all rely on props.product
//Refactor this using ContextAPI
const Product = props => {
	return (
		<div className="product">
			<img src={props.product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{props.product.title}</h1>

			<p className="price">${props.product.price}</p>

			<button onClick={() => props.addItem(props.product)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
