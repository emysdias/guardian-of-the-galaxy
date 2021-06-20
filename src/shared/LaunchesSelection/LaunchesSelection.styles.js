import styled from "styled-components";
import theme from "../theme";

export const Container = styled.section`
  width: ${theme.size[2]};
  height: ${theme.size[1]};
  background-color: ${theme.colors.white};
  border-radius: ${theme.border[1]};
  text-align: center;
  position: relative;
  z-index: 1;
  margin-right: ${theme.spacing.pixels[3]};

  img {
    margin-top: ${theme.spacing.pixels[1]};
    width: ${theme.size[3]};
    height: ${theme.size[3]};
  }
  .CardText {
    margin-top: ${theme.spacing.pixels[3]};
    color: ${theme.colors.purple[4]};
    font-weight: ${theme.typography.weight.bold};
    font-size: ${theme.typography.normal};
  }

  @media (max-width: ${theme.media.size[3]}) {
    margin-bottom: ${theme.spacing.pixels[3]};
  }

  @media (max-width: ${theme.media.size[1]}) {
    width: ${theme.media.size[5]};
    height: ${theme.media.size[4]};
    margin-right: 0;

    .CardText {
      font-size: ${theme.media.typography.normal};
    }

    img {
      margin-top: ${theme.spacing.pixels[1]};
      width: ${theme.size[4]};
      height: ${theme.size[4]};
    }
  }
`;
