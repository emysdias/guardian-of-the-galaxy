import styled from "styled-components";
import theme from "../../shared/theme";

export const Container = styled.section`
  cursor: pointer;
  position: fixed;
  width: ${theme.size[4]};
  height: ${theme.size[4]};
  right: ${theme.spacing.pixels[1]};
  bottom: ${theme.spacing.pixels[1]};
  border-radius: ${theme.spacing.porcent[2]};
  z-index: 1;
  background-color: ${theme.colors.purple[5]};
  color: ${theme.colors.purple[4]};
  border: none;
  text-align: center;

  img {
    height: ${theme.size[6]};
    width: ${theme.size[6]};
    padding: ${theme.spacing.pixels[3]};
  }
`;
