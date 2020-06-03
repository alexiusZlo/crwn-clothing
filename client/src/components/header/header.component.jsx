import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import {ReactComponent as Logo} from '../../assets/crown.svg';
import CardIcon from "../card-icon/card-icon.components";
import CardDropdown from "../card-dropdown/card-dropdown.component";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selector";

import {HeaderContainer, LogoConainer, OptionsContainer, OptionLink} from './header.styles';
import {signOutStart} from "../../redux/user/user.actions";

const Header = ({currentUser, hidden, signOutStart}) => {
    return (
        <HeaderContainer>
            <LogoConainer to='/'>
                <Logo className='logo'/>
            </LogoConainer>
            <OptionsContainer>
                <OptionLink to='/shop'>Shop</OptionLink>
                <OptionLink to='/shop'>Contact</OptionLink>
                {currentUser ?
                    <OptionLink as='div' onClick={signOutStart}>Sign out</OptionLink>
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
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
