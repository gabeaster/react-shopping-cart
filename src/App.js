import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Contexts
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';


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
			<ProductContext.Provider value={{ cart, products, addItem}}>
				<CartContext.Provider value={ cart }>
					<>
						<Navigation />

						{/* Routes */}
						<Route exact path="/">
							<Products />
						</Route>

						<Route path="/cart">
							<ShoppingCart />
						</Route>
					</>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
