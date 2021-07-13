import styled from 'styled-components';
import { colors } from './colors';

// body {
// margin: 0;
// padding: 0px;
// font-family: sans-serif;
// overflow-y: hidden;
// }

export const Container = styled.div`
  background: linear-gradient(${colors.purple}, ${colors.secondary});
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-x: hidden;
`;
