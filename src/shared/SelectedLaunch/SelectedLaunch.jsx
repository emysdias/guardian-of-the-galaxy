import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Card } from "./SelectedLaunch.style";

const SelectedLaunch = ({ name, details, rocket, date, flight }) => {
  const [nameRocket, setNameRocket] = useState([]);
  let newDate = new Date(date);

  useEffect(() => {
    const handleRocket = async () => {
      try {
        const response = await api.get(`rockets/${rocket}`);
        setNameRocket(response.data.name);
      } catch (error) {
        console.log("Error!");
      }
    };
    handleRocket();
  }, [rocket]);

  return (
    <Card>
      <section className="title">{name}</section>
      <section className="text">{details}</section>
      <section className="title">Rocket</section>
      <section className="text">{nameRocket ? nameRocket : "----"}</section>
      <section className="title">Date</section>
      <section className="text">{newDate.toLocaleDateString()}</section>
      <section className="title">Flight Number</section>
      <section className="text">{flight}</section>
    </Card>
  );
};

export default SelectedLaunch;
