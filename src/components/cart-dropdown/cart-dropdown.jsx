import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { useNavigate} from 'react-router-dom';

import Botton from '../botton/botton';
import CartItem from '../cart-item/cart-item';
import  {selectCartItems} from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => {
	const navigate = useNavigate();
	const handleChange = e =>{
		navigate("/checkout");
		dispatch(toggleCartHidden())
	}
	return (
	<div className="cart-dropdown">
		<div className="cart-items">
			{	cartItems.length ? 
				cartItems.map(cartItem => (
					<CartItem key={cartItem.id} item={cartItem} />
					))
				: (
					<span className="empty-meesage">Your Cart is Empty</span>
				)
			}
		</div>
		<Botton onClick={handleChange} >GO TO CHECKOUT</Botton>
	</div>
	)
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);