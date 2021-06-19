import React from "react";
import { Card } from "./SelectedLaunch.style";

const SelectedLaunch = ({ name, details }) => {
  return (
    <Card>
      <section className="name">{name}</section>
      <section className="details">{details}</section>
      <section className="button">
        <button type="button">See more</button>
      </section>
    </Card>
  );
};

export default SelectedLaunch;
