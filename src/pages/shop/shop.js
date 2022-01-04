import React from 'react';
import SHOP_DATA from './shop.data.js';
import PreviewCollection from '../../components/preview-collection/preview-collection'

class ShopPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collection: SHOP_DATA
		};
	}

	render() {
		const {collection} = this.state
		return(
			<div className="shop-page">
				{
					collection.map(( {id, ...otherCollectionsProps}) => (
						<PreviewCollection key={id} {...otherCollectionsProps}/>
					))
				}
			</div>
		)
	}
}

export default ShopPage;