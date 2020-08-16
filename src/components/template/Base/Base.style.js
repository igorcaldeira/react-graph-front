import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 70rem;
  padding-top: 10rem;
  padding-bottom: ${(props) => props?.theme?.gap?.xl};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 19px;

  h1,
  h3,
  input {
    font-family: 'Catamaran', sans-serif;
  }

  h3 {
    font-size: 2rem;
    color: #f0f0f0;
  }
`;
