import React from "react";
import { LaunchesSelection, Header } from "../../shared";
import Icons from "../../shared/assets";
import { Link } from "react-router-dom";
import { Container } from "./Begin.styles";

const Begin = () => {
  return (
    <Container>
      <Header text={"SpaceX Launches"} />
      <section className="cards">
        <section className="cardsSection">
          <Link style={{ textDecoration: "none" }} to={{ pathname: "/past" }}>
            <LaunchesSelection text={"Past\nLaunches"} icon={Icons.groot1} />
          </Link>
          <Link style={{ textDecoration: "none" }} to={{ pathname: "/latest" }}>
            <LaunchesSelection text={"Latest\nLaunches"} icon={Icons.groot2} />
          </Link>
        </section>
        <section className="cardsSection">
          <Link style={{ textDecoration: "none" }} to={{ pathname: "/next" }}>
            <LaunchesSelection text={"Next\nLaunches"} icon={Icons.groot3} />
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to={{ pathname: "/upcoming" }}
          >
            <LaunchesSelection
              text={"Upcoming\nLaunches"}
              icon={Icons.groot4}
            />
          </Link>
        </section>
      </section>
    </Container>
  );
};

export default Begin;
