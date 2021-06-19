import React, { useState, useEffect } from "react";
import { Header, SelectedLaunch } from "../../shared";
import { Container } from "./Selection.styles";
import api from "../../services/api";

const Selection = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    const launches = async () => {
      try {
        const response = await api.get("launches/past");
        setLaunches(response.data);
      } catch (error) {
        console.log("Ocorreu um erro!");
      }
    };

    launches();
  }, []);

  return (
    <Container>
      <Header text={"SpaceX Upcoming Launches "} icon />
      <section className="cards">
        {launches &&
          launches.map((item) => (
            <SelectedLaunch
              key={item.id}
              name={item.name}
              details={item.details ? item.details : "No details"}
            />
          ))}
      </section>
    </Container>
  );
};

export default Selection;
