import React, { useState, useEffect } from "react";
import { Header, SelectedLaunch } from "../../shared";
import { Container, Button } from "./Selection.styles";
import { useLocation } from "react-router-dom";

import api from "../../services/api";
import Icons from "../../shared/assets";

const Selection = () => {
  const [launches, setLaunches] = useState([]);
  const [launch, setLaunch] = useState([]);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const handleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleVisible);

  useEffect(() => {
    const handleLaunches = async () => {
      try {
        const response = await api.get(`launches${location.pathname}`);
        if (typeof response.data.length === "undefined") {
          setLaunch(response.data);
        } else {
          setLaunches(response.data);
        }
      } catch (error) {
        console.log(error);
        alert("Occur an error, try refresh the page!");
      }
    };
    handleLaunches();
  }, [location.pathname]);

  return (
    <Container>
      <Header text={`SpaceX ${location.pathname.substr(1)} launches`} icon />
      {launches &&
        launches.map((item) => (
          <section className="cards" key={item.id}>
            <SelectedLaunch
              name={item.name}
              details={item.details ? item.details : "No details"}
              rocket={item.rocket}
              date={item.date_local}
              flight={item.flight_number}
            />
          </section>
        ))}
      {launch && (
        <section className="cards">
          <SelectedLaunch
            name={launch.name}
            details={launch.details ? launch.details : "No details"}
            rocket={launch.rocket}
            date={launch.date_local}
            flight={launch.flight_number}
          />
        </section>
      )}
      {visible && (
        <section className="button">
          <Button onClick={() => scrollToTop()} type="button">
            <img src={Icons.up} alt="up" />
          </Button>
        </section>
      )}
    </Container>
  );
};

export default Selection;
