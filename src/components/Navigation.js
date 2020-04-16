import React from 'react';
import { NavLink } from 'react-router-dom';

//Navigation is a function that takes in props and returns a div (.navigation) that renders a NavLink to the Products routed Component and a NavLinke to the ShoppingCart routed component. The second navLink will also display how many items are in the cart. 
//This needs to be refactored using contextAPI to pull in props.cart.length



const Navigation = props => {
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{props.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
