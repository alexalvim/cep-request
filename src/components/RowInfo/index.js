import React from 'react';

import { Row, Label, Value } from './styles';

export default ({ label, value }) => (
  <Row>
    <Label>
      {label}:
    </Label>
    <Value>
      {value}
    </Value>
  </Row>
);
