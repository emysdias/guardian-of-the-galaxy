import styled from "styled-components";
import theme from "../theme";

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
  border-radius: ${theme.border[1]};
  margin-top: ${theme.spacing.pixels[1]};
  text-align: center;
  padding: ${theme.spacing.pixels[3]};
  padding-top: 0;

  .title {
    margin-top: ${theme.spacing.pixels[1]};
    color: ${theme.colors.purple[5]};
    font-size: ${theme.typography.title};
    font-weight: ${theme.typography.weight.bold};
  }

  .text {
    margin-top: ${theme.spacing.pixels[4]};
    color: ${theme.colors.purple[1]};
    font-size: ${theme.typography.normal};
    font-weight: ${theme.typography.weight.light};
  }
`;
