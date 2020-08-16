import styled from 'styled-components';

export const GoBack = styled.div`
  width: 5rem;
  display: block;
  color: white;
  font-size: 3rem;
  margin-bottom: ${(props) => props?.theme?.gap?.lg};

  a:link,
  a:visited,
  a:hover,
  a:active {
    color: white;
    text-decoration: none;
  }
`;
