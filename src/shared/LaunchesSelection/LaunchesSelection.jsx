import React from "react";
import history from "../../history";
import { Container } from "./LaunchesSelection.styles";

const LaunchesSelection = ({ url, text, icon }) => {
  let newText = text.split("\n").map((item, i) => {
    return <section key={i}>{item}</section>;
  });
  const directToPage = () => {
    history.push(url);
  };
  return (
    <Container onClick={() => directToPage()}>
      <img src={icon} alt={icon} />
      <section className="CardText">{newText}</section>
    </Container>
  );
};

export default LaunchesSelection;
