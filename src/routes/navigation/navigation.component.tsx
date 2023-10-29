import { Fragment } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutStart } from '../../store/user/user.action';

import {
  NavigationContainer,
  LogoContainer,
  LogoLink,
  NavLinks,
  NavLink,
  Greeting,
} from './navigation.styles';

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const firstName = currentUser?.displayName.split(' ')[0];

  const signOutUser = () => {
    dispatch(signOutStart());
    navigate('/');
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer>
          <LogoLink to="/">
            <CrwnLogo className="logo" />
          </LogoLink>
        </LogoContainer>
        <Greeting>
          {currentUser ? `Welcome, ${firstName}!` : 'Welcome, Guest!'}
        </Greeting>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
