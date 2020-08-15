import styled from 'styled-components';

export const Cta = styled.div`
  display: block;
  text-align: center;
  margin: ${(props) => props?.theme?.gap?.lg};

  svg {
    margin-right: ${(props) => props?.theme?.gap?.sm};
  }

  @media (min-width: 1281px) {
    float: right;
    margin: 0;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 10rem;
  margin: 0 auto;
  margin-bottom: ${(props) => props?.theme?.gap?.md};

  @media (min-width: 1281px) {
    float: right;
  }
`;

const ProfileHeader = {};

ProfileHeader.Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  gap: 0 ${(props) => props?.theme?.gap?.lg};
  grid-template-columns: 1fr;
  grid-template-areas: 'profile-pic' 'basic-info';

  @media (min-width: 1281px) {
    grid-template-columns: 10rem 1fr 1fr 1fr;
    grid-template-areas: 'profile-pic basic-info basic-info basic-info';
  }
`;

ProfileHeader.Picture = styled.div`
  grid-area: profile-pic;
`;

ProfileHeader.BasicInfo = styled.div`
  grid-area: basic-info;
  text-align: center;

  h1 {
    margin-top: ${(props) => props?.theme?.gap?.lg};
  }

  h2 {
    margin-top: ${(props) => props?.theme?.gap?.sm};
    margin-bottom: ${(props) => props?.theme?.gap?.sm};
  }

  button {
    margin-right: ${(props) => props?.theme?.gap?.sm};
  }

  @media (min-width: 1281px) {
    text-align: left;
  }
`;

export { ProfileHeader };
