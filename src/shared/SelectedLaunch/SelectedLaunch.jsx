import React from "react";
import { Card } from "./SelectedLaunch.style";

const SelectedLaunch = () => {
  return (
    <Card>
      <section className="name">WorldView Legion 1-2</section>
      <section className="description">
        Return-to-flight mission after the loss of Amos-6 in September 2016.
        Iridium NEXT will replace the original Iridium constellation, launched
        in the late 1990s. Each Falcon mission will carry 10 satellites, with a
        goal to complete deployment of the 66 plus 9 spare satellite
        constellation by mid 2018...
      </section>
      <section className="button">
        <button type="button">
          See more
        </button>
      </section>
    </Card>
  );
};

export default SelectedLaunch;
