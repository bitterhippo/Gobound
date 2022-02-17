import Navbar from "../Navbars/Navbars";

const MainScreen = (props) => { 
  return (
    <>
      <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
      {props.children}
    </>
  )
};

const styles = {

};

export default MainScreen;