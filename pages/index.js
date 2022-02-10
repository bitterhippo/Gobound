//firebase
import firebase from "../firebase/firebase";

//Subcomponent imports
import Navbar from "../components/Navbars/Navbars";

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
  </div>
}

const styles = {
  mainWrapper: {
    padding: -5,
  }
}

export default HomePage;