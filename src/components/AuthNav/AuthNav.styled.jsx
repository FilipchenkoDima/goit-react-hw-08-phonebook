import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNavWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const AuthNavLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  :hover,
  :active {
    color: #7f68a8;
  }
  &.active {
    color: #7f68a8;
  }
`;
