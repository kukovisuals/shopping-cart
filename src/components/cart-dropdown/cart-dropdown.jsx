import React from 'react';
import Botton from '../botton/botton';
import './cart-dropdown.styles.scss';

const CartDropdown = () => (
	<div className="cart-dropdown">
		<div className="cart-items">
			<Botton>GO TO CHECKOUT</Botton>
		</div>
	</div>
)

export default CartDropdown