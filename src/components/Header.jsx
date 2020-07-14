import React from "react";
import { Container } from "react-bootstrap";

import '../styles/header.css'

function Header() {
  return (
    <div>
      <header className="header">
        <Container>
          <p className="header__label">Случайный текст</p>
        </Container>
      </header>
    </div>
  );
}

export default Header;
