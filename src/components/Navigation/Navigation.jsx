// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { NavWrapper, HomeLogo, NavItem, LogoText } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavWrapper>
      <HomeLogo to="/">
        <ContactPhoneIcon />
        <LogoText
          variant="h6"
          noWrap
          style={{ textDecoration: 'none', color: '#ffffff', fontSize: '24px' }}
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.1rem',
          }}
        >
          PhoneBook
        </LogoText>
      </HomeLogo>

      {isLoggedIn && <NavItem to="/contacts">Contacts</NavItem>}
    </NavWrapper>
  );
};
