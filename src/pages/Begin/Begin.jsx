import React from "react";
import { LaunchesSelection, Header } from "../../shared";
import Icons from "../../shared/assets";
import { Container } from "./Begin.styles";

const Begin = () => {
  return (
    <Container>
      <Header text={"SpaceX Launches"} />
      <section className="cards">
        <LaunchesSelection text={"Past\nLaunches"} icon={Icons.groot1} />
        <LaunchesSelection text={"Latest\nLaunches"} icon={Icons.groot2} />
        <LaunchesSelection text={"Next\nLaunches"} icon={Icons.groot3} />
        <LaunchesSelection text={"Upcoming\nLaunches"} icon={Icons.groot4} />
      </section>
    </Container>
  );
};

export default Begin;
