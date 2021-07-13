import styled from 'styled-components';
import { colors } from './colors';

// body {
// margin: 0;
// padding: 0px;
// font-family: sans-serif;
// overflow-y: hidden;
// }

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: linear-gradient(${colors.purple}, ${colors.secondary});
  min-height: 100vh;
`;
