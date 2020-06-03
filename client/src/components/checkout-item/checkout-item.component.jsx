import React from "react";
import {connect} from 'react-redux';

import {clearItemFromCart, addItem, removeItem} from "../../redux/cart/cart.action";

import './checkout-item.styles.scss'


const CheckoutItem = ({carItem, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = carItem;
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt="iem"/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(carItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(carItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(carItem)}>&#10005;</div>
        </div>
    )
};


const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
