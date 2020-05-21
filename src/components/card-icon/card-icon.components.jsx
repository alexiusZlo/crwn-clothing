import React from "react";
import {connect} from 'react-redux'

import {ReactComponent as ShopingIcon} from "../../assets/shopping-bag.svg";

import {toggleCartHidden} from "../../redux/card/cart.action";

import './card-icon.styles.scss';

const CardIcon = ({toggleCartHidden}) => (
    <div className='card-icon' onClick={toggleCartHidden}>
        <ShopingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CardIcon);
