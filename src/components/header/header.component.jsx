import React from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {createStructuredSelector} from 'reselect'

import {auth} from "../../firebase/firebasse.utils";


import {ReactComponent as Logo} from '../../assets/crown.svg';
import CardIcon from "../card-icon/card-icon.components";
import CardDropdown from "../card-dropdown/card-dropdown.component";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selector";

import {HeaderContainer, LogoConainer, OptionsContainer, OptionLink} from './header.styles';


const Header = ({currentUser, hidden}) => {
    return (
        <HeaderContainer>
            <LogoConainer to='/'>
                <Logo className='logo'/>
            </LogoConainer>
            <OptionsContainer>
                <OptionLink to='/shop'>Shop</OptionLink>
                <OptionLink to='/shop'>Contact</OptionLink>
                {currentUser ?
                    <OptionLink as='div' onClick={() => auth.signOut()}>Sign out</OptionLink>
                    : <OptionLink to='/signin'>Sign in</OptionLink>
                }
                <CardIcon/>
            </OptionsContainer>
            {hidden ? null : <CardDropdown/>}
        </HeaderContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
