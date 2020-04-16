import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


//We have a function called app that returns a Div (.App) that renders a Navigation component, a Product Component routed component, and a ShoppingCart routed component
//We need to complete the addItem functionality

function App() {
	//two pieces of state: products, and cart
	//products receives data as initialState
	const [products] = useState(data);
	//cart receives an empty array as initialStae
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				{/* Products is receiving products and addItem as props */}
				<Products products={products} addItem={addItem} />
			</Route>

			<Route path="/cart">
				{/* ShoppingCart is receiving cart as props */}
				<ShoppingCart cart={cart} />
			</Route>
		</div>
	);
}

export default App;
