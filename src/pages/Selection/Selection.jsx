import React, { useState, useEffect } from "react";
import { Header, SelectedLaunch } from "../../shared";
import { Container } from "./Selection.styles";
import { useLocation } from "react-router-dom";

import api from "../../services/api";

const Selection = () => {
  const [launches, setLaunches] = useState([]);
  const [launch, setLaunch] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const launches = async () => {
      try {
        const response = await api.get(`launches${location.pathname}`);
        if (typeof response.data.length === "undefined") {
          setLaunch(response.data);
        } else {
          setLaunches(response.data);
        }
      } catch (error) {
        console.log("Ocorreu um erro!");
      }
    };

    launches();
  }, [location.pathname]);

  return (
    <Container>
      <Header text={`SpaceX ${location.pathname.substr(1,)} launches`} icon />
      {launches &&
        launches.map((item) => (
          <section className="cards" key={item.id}>
            <SelectedLaunch
              name={item.name}
              details={item.details ? item.details : "No details"}
            />
          </section>
        ))}
      {launch && (
        <section className="cards">
          <SelectedLaunch
            name={launch.name}
            details={launch.details ? launch.details : "No details"}
          />
        </section>
      )}
    </Container>
  );
};

export default Selection;
