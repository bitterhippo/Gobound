//Subcomponent imports
import Navbar from "../components/Navbars/Navbars";
import Dropdown from "../components/Dropdowns/Dropdown";

function HomePage() {
  return <div style={styles.MainWrapper}>
    {/* global style to remove index.html default padding/margin */}
    <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
    <script>
      
    </script>
    <Navbar />
    Welcome to Next.js!
    <Dropdown />
  </div>
}

const styles = {
  mainWrapper: {
    padding: -5,
  }
}

export default HomePage;