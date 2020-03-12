import React from 'react';
import { link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons';

import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <link to="/">
        <img src={logo} alt="Rocketshoes" />
      </link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
