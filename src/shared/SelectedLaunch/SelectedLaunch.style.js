import styled from "styled-components";
import theme from "../theme";

export const Card = styled.section`
  display: flex;
  height: 340px;
  height: ${theme.size[1]};
  background-color: ${theme.colors.white};
  border-radius: ${theme.spacing.pixels[3]};
  margin-top: 50px;
`;
