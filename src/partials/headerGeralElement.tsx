import React from 'react';
import { HeaderBox, MenuIcon } from './headerGeralStyle';

class HeaderGeralElement extends React.Component {
  render() {
    return (
      <HeaderBox>
        <MenuIcon href="#">
          <i className="fas fa-bars"></i>
        </MenuIcon>
        <MenuIcon href="#">
          <i className="fas fa-atlas"></i>
        </MenuIcon>
      </HeaderBox>
    );
  }
}

export default HeaderGeralElement;
