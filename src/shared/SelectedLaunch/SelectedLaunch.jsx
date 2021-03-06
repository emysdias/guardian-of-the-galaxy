import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Container } from "./SelectedLaunch.style";

const SelectedLaunch = ({ name, details, rocket, date, flight }) => {
  let newDate = new Date(date);
  const [nameRocket, setNameRocket] = useState(false);

  useEffect(() => {
    let componentMounted = true;
    const handleRocket = async () => {
      try {
        const response = await api.get(`rockets/${rocket}`);
        if (componentMounted) {
          setNameRocket(response.data.name);
        }
      } catch (error) {
        console.log(error);
        alert("Occur an error, try refresh the page!");
      }
    };
    if (rocket) handleRocket();
    return () => {
      componentMounted = false;
    };
  }, [rocket]);

  return (
    <section>
      {name && (
        <Container>
          <section className="title">{name}</section>
          <section className="text">{details}</section>
          <section className="title">Rocket</section>
          <section className="text">{nameRocket ? nameRocket : "----"}</section>
          <section className="title">Date</section>
          <section className="text">{newDate.toLocaleDateString()}</section>
          <section className="title">Flight Number</section>
          <section className="text">{flight}</section>
        </Container>
      )}
    </section>
  );
};

export default SelectedLaunch;
