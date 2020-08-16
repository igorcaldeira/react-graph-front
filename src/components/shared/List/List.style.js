import styled from 'styled-components';

const Item = {};

Item.Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0 2rem;
  grid-template-areas: 'flag desc desc';
`;

Item.Flag = styled.img`
  grid-area: flag;
  width: 100%;
`;

Item.Description = styled.div`
  grid-area: desc;
`;

export { Item };
