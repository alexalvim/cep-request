import styled from 'styled-components';

import Colors from '../../colors';
import Spaces from '../../spaces';
import Fonts from '../../fonts';

const Container = styled.button`
  background-color: ${Colors.darkGray};
  border: none;
  color: ${Colors.darkestColor};
  cursor: pointer;
  display: inline-block;
  padding: ${Spaces.base} ${Spaces.double};
`;

const Label = styled.span`
  color: ${Colors.lightestColor};
  font-size: ${Fonts.medium};
`;

export {
  Container,
  Label
};