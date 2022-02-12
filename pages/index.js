import { useState, useEffect } from 'react';

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
    <Navbar />
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