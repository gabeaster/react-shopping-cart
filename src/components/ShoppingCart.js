import React from 'react';

// Components
import Item from './ShoppingCartItem';

//ShoppingCart is a function that takes in props, completes another function to determine the cartTotal (which uses props.cart), and returns a div (.shopping-cart). In the div, we map the cart and for each item we find, an item component is returned with a unique key and an item object (uses props.cart); 

const ShoppingCart = props => {
	const getCartTotal = () => {
		return props.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{props.cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
