import React from "react";
import { Header, SelectedLaunch } from "../../shared";
import { Container } from "./Selection.styles";

const Selection = () => {
  return (
    <Container>
      <Header text={"SpaceX Upcoming Launches "} icon />
      <section className="cards">
        <SelectedLaunch />
        <SelectedLaunch />
      </section>
    </Container>
  );
};

export default Selection;
