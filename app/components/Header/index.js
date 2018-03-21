/**
*
* Header
*
*/
/*eslint-disable*/
import React from 'react';
import NavBar from './NavBar';
import Logo from './Logo';
import Dropdown from './Dropdown';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    }
  }

  toggleNavbar = () => {
    this.setState(
      {
        collapsed: !this.state.collapsed

      }
    );
  }


  render() {
    return (
      <div>

        <NavBar>
          <Logo />
          <Dropdown/>
        </NavBar>
      </div>
    );
  }
}

Header.propTypes = {

};

export default Header;
