import React, { useEffect, useState } from "react";
import Icons from "../assets";
import { Container } from "./Button.styles";

const Button = () => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisible);
    return function cleanupListener() {
      window.removeEventListener("scroll", handleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section>
      {visible && (
        <section className="button">
          <Container onClick={() => scrollToTop()} type="button">
            <img src={Icons.up} alt="up" />
          </Container>
        </section>
      )}
    </section>
  );
};

export default Button;
