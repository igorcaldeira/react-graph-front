import React from 'react';
import { Wrapper, Content } from './Base.style';

const Base = ({ children }) => (
  <Wrapper>
    <Content>
      <h1>Country search</h1>
      {children}
    </Content>
  </Wrapper>
);

export default Base;
