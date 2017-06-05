import React from 'react';
import AppActions from "../actions/app-actions";
import CartButton from './app-cart-button';

export default (props) => {
	return (
		<div className="col-xs-6 col-sm-4 col-md-3"></div>
		<h4>{ props.item.title }</h4>
		<img src="http://placeholdit.250x250" width="100%" className="img-responsive"/>
		<p>{ prop.item.summary }</p>
		<p>{ props.item.cost }</p>
		<CartButton
			handler = { AppActions.addItem.bind(null, props.item) }
			txt="Add To Cart"
		/>
	</div>
	)
}
