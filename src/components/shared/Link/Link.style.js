import styled from 'styled-components';

export const LinkVariation = styled.a`
  color: ${(props) => props?.theme?.color?.primary};
  text-decoration: none;
  font-size: 0.9rem;

  svg {
    margin-right: ${(props) => props?.theme?.gap?.sm};
  }
`;
