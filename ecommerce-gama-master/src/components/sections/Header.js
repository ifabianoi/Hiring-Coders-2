import React from 'react';
import Logo from '../elements/Logo';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="site-header-inner">
          <Logo />          
        </div>
      </div>
    </header>
  );
}

export default Header;
