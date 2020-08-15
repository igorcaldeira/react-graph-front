import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { LinkVariation } from './Link.style';

const Link = ({ href, children, showIcon }) => (
  <LinkVariation href={href}>
    {showIcon && <FiExternalLink />}
    {children}
  </LinkVariation>
);

Link.defaultProps = {
  showIcon: true,
};

export default Link;
