import React from "react";
import { LaunchesSelection, Header } from "../../shared";
import Icons from "../../shared/assets";
import { Container } from "./Begin.styles";

const Begin = () => {
  return (
    <Container>
      <Header text={"SpaceX Launches"} />
      <section className="cards">
        <section className="cardsSection">
          <LaunchesSelection
            url={"/past"}
            text={"Past\nLaunches"}
            icon={Icons.groot1}
          />
          <LaunchesSelection
            url={"/latest"}
            text={"Latest\nLaunches"}
            icon={Icons.groot2}
          />
        </section>
        <section className="cardsSection">
          <LaunchesSelection
            url={"/next"}
            text={"Next\nLaunches"}
            icon={Icons.groot3}
          />

          <LaunchesSelection
            url={"/upcoming"}
            text={"Upcoming\nLaunches"}
            icon={Icons.groot4}
          />
        </section>
      </section>
    </Container>
  );
};

export default Begin;
