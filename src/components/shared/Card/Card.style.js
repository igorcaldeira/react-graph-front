import styled from 'styled-components';

export const CardWrapper = styled.div`
  margin-top: ${(props) => props?.theme?.gap?.md};
  margin-bottom: ${(props) => props?.theme?.gap?.lg};
  background-color: ${(props) => props?.theme?.color?.fg};
  padding: ${(props) => props?.theme?.gap?.lg} ${(props) => props?.theme?.gap?.lg};
`;

export const CardTitle = styled.h3`
  margin-bottom: ${(props) => props?.theme?.gap?.lg};
`;
