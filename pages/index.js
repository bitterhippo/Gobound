//Subcomponent imports
import Navbar from "../components/Navbars/Navbars";
import Dropdown from "../components/Dropdowns/Dropdown";

function HomePage() {

  let navDefaults = [
    { to: '/jobs', name: 'Jobs' },
    { to: '/personel', name: 'Personel' }
  ];

  return <div style={styles.MainWrapper}>
    {/* global style to remove index.html default padding/margin */}
    <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
    <Navbar links={navDefaults} />
    {/* main content will go here */}
    <div style={styles.indexContent}>
      GoBound dashboard - under construction
      <Dropdown />
    </div>
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