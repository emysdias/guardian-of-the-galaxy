import styled from "styled-components";
import theme from "../../shared/theme";

export const Container = styled.section`
  display: flex;
  margin-top: ${theme.spacing.pixels[1]};
  position: relative;
  z-index: 1;

  .arrow {
    display: flex;
    align-items: center;
    position: absolute;
    margin-left: ${theme.spacing.pixels[2]};

    img {
      height: ${theme.size[5]};
      width: ${theme.size[5]};
      cursor: pointer;
    }

    button {
      background: none;
      border: none;
      padding: 0;
    }
  }

  .title {
    width: ${theme.spacing.porcent[3]};
    display: block;
    text-align: center;
    color: ${theme.colors.white};
    font-size: ${theme.typography.header};
    font-weight: ${theme.typography.weight.bold};
  }

  @media (max-width: ${theme.media.size[1]}) {
    .title {
      font-size: ${theme.media.typography.header};
    }
  }
`;
