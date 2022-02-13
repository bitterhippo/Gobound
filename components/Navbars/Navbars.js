//subcomponents import
import Colors from '../Colors';
import StyledButton from '../Buttons/StyledButton';
import StyledLink from '../StyledLink/StyledLink';

const Navbar = ({ loggedIn }) => {
  return <div style={styles.navbarMainWrap}>
    <div style={styles.navbarContent}>
      <div style={styles.navLinksContainer}>
        <div style={styles.navbarItems}>
          <StyledLink to={"/jobs"} name={"Jobs"} />
        </div>
        <div style={styles.navbarItems}>
          <StyledLink to={"/personel"} name={"Personel"} />
        </div>
      </div>
      <div style={{ ...styles.navbarItems, marginTop: 5 }}>{!loggedIn && <StyledButton>Log In</StyledButton>}</div>
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
  },
  navLinksContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 50
  }
};

export default Navbar;