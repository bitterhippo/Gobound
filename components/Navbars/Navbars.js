//subcomponents import
import Colors from '../Colors';
import StyledButton from '../Buttons/StyledButton';


const Navbar = ({ loggedIn }) => {
  return <div style={styles.navbarMainWrap}>
    <div style={styles.navbarContent}>
      {!loggedIn && <StyledButton>Log In</StyledButton>}
    </div>
  </div>
}

const styles = {
  navbarMainWrap: {
    display: 'flex',
    width: '100%',
    height: 40,
    backgroundColor: Colors.Secondary,
    borderBottom: `2px solid ${Colors.Primary}`,
    opacity: 0.6
  },
  navbarContent: {
    width: '90%',
    margin: 'auto auto'
  }
};

export default Navbar;