import React from 'react';

import { Container, Label } from './styles';

export default ({ label, onClick }) => (
  <Container onClick={onClick}>
    <Label>
      {label}
    </Label>
  </Container>
);
