import React from "react";
import { Container } from "./LaunchesSelection.styles";

const LaunchesSelection = ({ text, icon }) => {
  let newText = text.split("\n").map((item, i) => {
    return <section key={i}>{item}</section>;
  });
  return (
    <Container>
      <img src={icon} alt={icon} />
      <section className="CardText">{newText}</section>
    </Container>
  );
};

export default LaunchesSelection;
