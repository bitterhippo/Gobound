//subcomponents import
import Colors from '../Colors';
import StyledButton from '../Buttons/StyledButton';
import StyledLink from '../StyledLink/StyledLink';

const Navbar = ({ loggedIn }) => {
  return <div style={styles.navbarMainWrap}>
    <div style={styles.navbarContent}>
      <div style={styles.navbarItems}><StyledLink to={"/about"} name={"About"} /></div>
      <div style={styles.navbarItems}>{!loggedIn && <StyledButton>Log In</StyledButton>}</div>
    </div>
  </div>
}

const styles = {
  navbarMainWrap: {
    width: '100%',
    height: 40,
    backgroundColor: Colors.Secondary,
    borderBottom: `2px solid ${Colors.Primary}`,
    opacity: 0.6
  },
  navbarContent: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    margin: 'auto auto',
    justifyContent: 'space-between'
  },
  navbarItems: {
    marginTop: 'auto'
  }
};

export default Navbar;