import styled from "styled-components";
import theme from "../theme";

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  height: ${theme.size[2]};
  background-color: ${theme.colors.white};
  border-radius: ${theme.border[1]};
  margin-top: 50px; //TODO
  text-align: center;
  padding: 20px; //TODO

  .name {
    color: ${theme.colors.purple[5]};
    font-size: ${theme.typography.normal};
    font-weight: ${theme.typography.weight.bold};
  }

  .details {
    color: ${theme.colors.purple[1]};
    margin-top: 50px; //TODO
    font-size: ${theme.typography.normal};
    font-weight: ${theme.typography.weight.light};
  }

  .button {
    margin: 0;
    position: absolute;
    left: 46%; //TODO
    margin-top: 200px; //TODO
  }

  button {
    background: none;
    border: none;
    background-color: ${theme.colors.purple[5]};
    color: ${theme.colors.purple[4]};
    font-weight: ${theme.typography.weight.bold};
    border-radius: ${theme.border[2]};
    height: 30px; //TODO
    width: 100px; //TODO
  }
`;
