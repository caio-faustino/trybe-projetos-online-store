import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/"> Home </Link>
      </header>
    );
  }
}

export default Header;
