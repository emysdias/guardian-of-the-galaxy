import React, { useState, useEffect } from "react";
import { Header, SelectedLaunch, Button } from "../../shared";
import { Container } from "./Selection.styles";
import { useLocation } from "react-router-dom";
import { Ring } from "react-awesome-spinners";

import api from "../../services/api";

const Selection = () => {
  const [launches, setLaunches] = useState([]);
  const [launch, setLaunch] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const ucfirst = (str) => {
    var firstLetter = str.substr(0, 1);
    return firstLetter.toUpperCase() + str.substr(1);
  };

  useEffect(() => {
    const handleLaunches = async () => {
      setLoading(true);
      try {
        const response = await api.get(`launches${location.pathname}`);
        if (typeof response.data.length === "undefined") {
          setLaunch(response.data);
        } else {
          setLaunches(response.data);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        alert("Occur an error, try refresh the page!");
      }
    };
    handleLaunches();
  }, [location.pathname]);

  return (
    <Container>
      <Header text={`${ucfirst(location.pathname.substr(1))} launches`} icon />
      {loading ? (
        <section className="ring">
          <Ring color="#5E898D" />
        </section>
      ) : (
        <section>
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
        </section>
      )}
      <Button />
    </Container>
  );
};

export default Selection;
