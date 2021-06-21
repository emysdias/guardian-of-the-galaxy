import styled from "styled-components";
import theme from "../theme";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
  border-radius: ${theme.border[1]};
  margin-top: ${theme.spacing.pixels[2]};
  margin-bottom: ${theme.spacing.pixels[3]};
  text-align: center;
  position: relative;
  padding: ${theme.spacing.pixels[3]};
  padding-top: 0;
  z-index: 1;

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

  @media (max-width: ${theme.media.size[1]}) {
    .title {
      font-size: ${theme.media.typography.title};
    }
    
    .text {
      font-size: ${theme.media.typography.normal};
    }
  }
`;
