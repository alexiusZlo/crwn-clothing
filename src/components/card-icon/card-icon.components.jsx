import React from "react";
import {connect} from 'react-redux'

import {ReactComponent as ShopingIcon} from "../../assets/shopping-bag.svg";

import {toggleCartHidden} from "../../redux/cart/cart.action";

import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import './card-icon.styles.scss';

const CardIcon = ({toggleCartHidden, itemCount}) => (
    <div className='card-icon' onClick={toggleCartHidden}>
        <ShopingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);
