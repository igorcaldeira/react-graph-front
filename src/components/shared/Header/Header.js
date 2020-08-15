import React from 'react';
import { FaYandexInternational, FaGithubAlt, FaPaperPlane } from 'react-icons/fa';
import { GrTwitter, GrLinkedinOption } from 'react-icons/gr';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import Button from 'components/shared/Button';
import { ProfileHeader, Image, Cta } from './Header.style';

const icons = {
  twitter: <GrTwitter />,
  google: <AiOutlineGooglePlus />,
  linkedin: <GrLinkedinOption />,
  github: <FaGithubAlt />,
  yandex: <FaYandexInternational />,
};

const Header = ({ picture, name, occupation, cta, social }) => (
  <ProfileHeader.Wrapper>
    <ProfileHeader.Picture>
      <Image src={require(`assets/img/${picture}`)} />
    </ProfileHeader.Picture>
    <ProfileHeader.BasicInfo>
      <h1>{name}</h1>
      <h2>{occupation}</h2>
      <Cta>
        <Button>
          <FaPaperPlane />
          {cta}
        </Button>
      </Cta>
      <div>
        {social.map(({ name, link }) => (
          <Button key={name} variation="rounded">
            {icons[name]}
          </Button>
        ))}
      </div>
    </ProfileHeader.BasicInfo>
  </ProfileHeader.Wrapper>
);

Header.defaultProps = {
  name: '',
  occupation: '',
  cta: '',
  social: [],
};

export default Header;
