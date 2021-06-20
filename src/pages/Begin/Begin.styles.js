import styled from "styled-components";
import theme from "../../shared/theme";

export const Container = styled.section`
  .cards {
    position: relative;
    margin-top: ${theme.spacing.porcent[1]};
    display: flex;
    justify-content: center;
  }

  .cardsSection {
    display: flex;
    position: relative;
  }

  @media (max-width: ${theme.media.size[3]}) {
    .cardsSection {
      flex-direction: column;
    }
  }

  @media (max-width: ${theme.media.size[2]}) {
    .cards {
      display: inline-grid;
      width: ${theme.spacing.porcent[3]};
    }
  }
`;
