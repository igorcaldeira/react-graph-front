import styled from 'styled-components';

export const TitleWithFlagBackground = styled.h1`
  background: linear-gradient(to bottom, transparent, transparent, transparent), url(${(props) => props?.bg});
  background-size: 50%;
  background-attachment: cover;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  padding-top: 1.5rem;
`;

export const DetailsContent = styled.div`
  padding-top: ${(props) => props?.theme?.gap?.xl};
  padding-bottom: ${(props) => props?.theme?.gap?.xl};

  p {
    padding-top: ${(props) => props?.theme?.gap?.md};
  }
`;
