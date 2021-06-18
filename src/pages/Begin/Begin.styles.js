import styled from "styled-components";
import theme from "../../shared/theme";

export const Container = styled.section`
  .title {
    position: relative;
    z-index: 1;
    display: block;
    text-align: center;
    color: ${theme.colors.white};
    font-size: ${theme.typography.title};
    font-weight: ${theme.typography.weight.bold};
    margin-top: ${theme.spacing.pixels[1]};
  }

  .cards {
    position: relative;
    z-index: 1;
    margin-top: ${theme.spacing.porcent[1]};
    display: flex;
    justify-content: center;
  }
`;
