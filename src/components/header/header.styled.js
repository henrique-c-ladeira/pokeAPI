import styled from 'styled-components';
import { colors } from '../../colors';

export const Container = styled.div`
  color: aliceblue;
  font-size: 3rem;
  vertical-align: middle;
  text-align: center;
  font-family: 'Bigelow Rules', cursive;
  background: linear-gradient(${colors.purple}, ${colors.darkPurple});
  padding: 1rem;
  cursor: default;
  user-select: none;
`;
