import styled from 'styled-components';

import Colors from '../../colors';
import Spaces from '../../spaces';
import Fonts from '../../fonts';

const Container = styled.div`
  align-items: center;
  background-color: ${Colors.lightGray};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  padding: ${Spaces.double};
  width: 100%;
`;

const ContentBox = styled.div`
  background-color: ${Colors.lightestColor};
  box-shadow: 1px 2px 4px 1px ${Colors.mediumGray};
  margin: ${Spaces.base} 0;
  max-width: 400px;
  padding: ${Spaces.double};
  width: 100%;
`;

const CEPInput = styled.input`
  border: solid 1px ${Colors.darkGray};
  color: ${Colors.darkestColor};
  font-size: ${Fonts.medium};
  flex-grow: 1;
  margin-right: ${Spaces.base};
  padding: ${Spaces.base};
`;

const FormWrapper = styled.div`
  display: flex;
`;

const InfoText = styled.span`
  color: ${Colors.darkGray};
  display: block;
  font-size: ${Fonts.medium};
`;

export {
  Container,
  ContentBox,
  CEPInput,
  FormWrapper,
  InfoText,
};