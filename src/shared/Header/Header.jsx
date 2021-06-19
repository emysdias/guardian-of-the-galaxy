import React from "react";
import { Container } from "./Header.styles";
import Icons from "../../shared/assets";
import history from "../../history";

const Header = ({ text, icon }) => {
  
  return (
    <Container>
      {icon && (
        <section className="arrow">
          <button type="button" onClick={() => history.goBack()}>
            <img src={Icons.arrow} alt={Icons.arrow} />
          </button>
        </section>
      )}
      <section className="title">{text}</section>
    </Container>
  );
};

export default Header;
