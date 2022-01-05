import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/logo.svg';
import './header.styles.scss';

const Header = () => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo"/>
		</Link>
		<div className="option">
			<Link className="option" to='/shop'/>
			COLLECTION
		</div>
		<div className="option">
			<Link className="option" to='/contact'/>
			CONTACT
		</div>
	</div>
);

export default Header;