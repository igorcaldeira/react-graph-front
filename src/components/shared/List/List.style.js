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

  p {
    margin-top: ${(props) => props?.theme?.gap?.md};
    margin-bottom: ${(props) => props?.theme?.gap?.md};
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
  font-size: 8rem;
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
`;

export { Item };
