import React from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {createStructuredSelector} from 'reselect'

import {auth} from "../../firebase/firebasse.utils";

import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.scss'
import CardIcon from "../card-icon/card-icon.components";
import CardDropdown from "../card-dropdown/card-dropdown.component";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selector";

const Header = ({currentUser, hidden}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/shop'>Contact</Link>
                {currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>Sign out</div>
                    : <Link className='option' to='/signin'>Sign in</Link>
                }
                <CardIcon/>
            </div>
            {hidden ? null : <CardDropdown/>}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
