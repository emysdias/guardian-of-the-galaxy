import React from "react";
import { Card } from "./LaunchesSelection.styles";

const LaunchesSelection = ({ text, icon }) => {
  let newText = text.split("\n").map((item, i) => {
    return <section key={i}>{item}</section>;
  });
  return (
    <Card>
      <img src={icon} alt={icon} />
      <section className="CardText">{newText}</section>
    </Card>
  );
};

export default LaunchesSelection;
