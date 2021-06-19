import React from "react";
import { LaunchesSelection, Header } from "../../shared";
import Icons from "../../shared/assets";
// import { Link } from "react-router-dom";
import { Container } from "./Begin.styles";

// const Params = [
//   { id: 0, text: "Past\nLaunches", icon: Icons.groot1 },
//   { id: 1, text: "Latest\nLaunches", icon: Icons.groot2 },
//   { id: 2, text: "Next\nLaunches", icon: Icons.groot3 },
//   { id: 3, text: "Upcoming\nLaunches", icon: Icons.groot4 },
// ];

const Begin = () => {
  return (
    <Container>
      <Header text={"SpaceX Launches"} />
      <section className="cards">
        {/* {Params.map((item) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              to={{ pathname: "/selection" }}
              state={{ testvalue: item.text }}
              key={item.id}
            >
              <LaunchesSelection
                text={item.text}
                icon={item.icon}
              />
            </Link>
          );
        })} */}
        <LaunchesSelection text={"Past\nLaunches"} icon={Icons.groot1} />
        <LaunchesSelection text={"Latest\nLaunches"} icon={Icons.groot2} />
        <LaunchesSelection text={"Next\nLaunches"} icon={Icons.groot3} />
        <LaunchesSelection text={"Upcoming\nLaunches"} icon={Icons.groot4} />
      </section>
    </Container>
  );
};

export default Begin;
