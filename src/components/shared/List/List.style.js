import styled from 'styled-components';

const Item = {};

Item.Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0 2rem;
  grid-template-areas: 'flag desc desc';
  margin-bottom: ${(props) => props?.theme?.gap?.lg};
  cursor: pointer;
  transition: font-size ease-in 200ms;

  p {
    margin-top: ${(props) => props?.theme?.gap?.md};
    margin-bottom: ${(props) => props?.theme?.gap?.md};
  }

  h3 {
    font-size: 1.3rem;
    transition: font-size ease-in 200ms;
  }

  &:hover {
    h3 {
      font-size: 2.4rem;
    }
    font-size: 1.1rem;
  }
`;

Item.Flag = styled.img`
  grid-area: flag;
  width: 100%;
`;

Item.Description = styled.div`
  grid-area: desc;
  position: relative;

  span {
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);

    div {
      font-size: 0.7rem;
      color: white;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  color: white;
  background-color: transparent;
  font-size: 2rem;
  margin-bottom: ${(props) => props?.theme?.gap?.xl};
  border: none;
  border-bottom: white solid 0px;
  transition: border-bottom ease-in 100ms;

  &:focus {
    outline: none;
    border-bottom: white solid 2px;
  }

  &::placeholder {
    color: white;
  }

  @media (min-width: 1281px) {
    font-size: 8rem;
  }
`;

export { Item };
