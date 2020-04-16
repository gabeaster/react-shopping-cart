import React from 'react';



//Item is a function that takes in props and returns a div (.shopping-cart_item) and displays an image (props.image and props.title) and a div below the image that displays (props.title, props.price, and a remove button)
//Refactor using contextAPI. 
const Item = props => {
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
