import styled from 'styled-components';

import Colors from '../../colors';
import Spaces from '../../spaces';
import Fonts from '../../fonts';

const Row = styled.div`
  margin: ${Spaces.base} 0;
`;

const Value = styled.span`
  color: ${Colors.darkGray};
  font-size: ${Fonts.medium};
`;

const Label = styled(Value)`
  font-weight: bold;
  margin-right: ${Spaces.half};
`;

export {
  Row,
  Label,
  Value,
};