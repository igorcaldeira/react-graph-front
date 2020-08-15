import styled from 'styled-components';

const buttonColors = {
  primary: 'primaryDark',
  secondary: 'secondary',
  rounded: 'social',
};

export const ButtonVariation = styled.button`
  padding: 0.5rem 0.8rem;
  border: none;
  text-transform: uppercase;
  color: white;
  background-color: ${(props) => props?.theme?.color?.[buttonColors[props?.variation]]};
  border-radius: ${(props) => (props?.variation === 'rounded' ? '100%' : '0.3rem')};

  svg {
    vertical-align: middle;
    width: ${(props) => (props?.variation === 'rounded' ? '1rem' : 'initial')};
    height: ${(props) => (props?.variation === 'rounded' ? '1.5rem' : 'initial')};
  }
`;
