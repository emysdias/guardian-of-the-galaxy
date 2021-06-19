import styled from "styled-components";
import theme from "../../shared/theme";

export const Container = styled.section`
  text-align: center;
  margin-top: ${theme.spacing.pixels[1]};

  h3 {
    color: ${theme.colors.white};
  }
  p {
    color: ${theme.colors.white};
  }
`;
