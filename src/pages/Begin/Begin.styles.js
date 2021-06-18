import styled from "styled-components";
import theme from "../../shared/theme";

export const Title = styled.div`
  display: block;
  text-align: center;
  color: ${theme.colors.white};
  font-size: ${theme.typography.title};
  font-weight: ${theme.typography.weight.bold};
  margin-top: ${theme.typography.spacing[1]};
`;
