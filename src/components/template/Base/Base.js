import React from 'react';
import { Wrapper, Content } from './Base.style';

const Base = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
);

export default Base;
