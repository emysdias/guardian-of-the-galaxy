import styled from "styled-components";
import theme from "../../shared/theme";

export const Container = styled.section`
  .cards {
    margin-left: ${theme.spacing.pixels[2]};
    margin-right: ${theme.spacing.pixels[2]};
  }

  .button {
    position: absolute;
  }

  .ring {
    text-align: center;
    margin-top: ${theme.spacing.pixels[1]};
  }
`;
