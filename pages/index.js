//Subcomponent imports
import Navbar from "../components/Navbars/Navbars";
import Dropdown from "../components/Dropdowns/Dropdown";
import MainScreen from "../components/PPC/MainScreen";

function HomePage() {

  let navDefaults = [
    { to: '/jobs', name: 'Jobs' },
    { to: '/personel', name: 'Personel' }
  ];

  return <div style={styles.MainWrapper}>
    <MainScreen>
      <Navbar links={navDefaults} />
      {/* main content will go here */}
      <div style={styles.indexContent}>
        GoBound dashboard - under construction
        <Dropdown />
      </div>
    </MainScreen>
  </div>
}

const styles = {
  mainWrapper: {
    padding: -5,
  },
  indexContent: {
    marginLeft: 20,
    marginTop: "3vh"
  }
}

export default HomePage;