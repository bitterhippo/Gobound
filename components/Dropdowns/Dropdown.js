import { useState } from "react";
import Colors from "../Colors";

const Dropdown = ({ options }) => {

  const [toggleOpen, setToggleOpen] = useState(false);

  return (
    <div
      style={styles.dropdownMainWrapper}
      onClick={() => setToggleOpen(true)}>
      TEST
      {toggleOpen && <div style={styles.containerOpen}>OPEN</div>}
    </div >
  )
};

const styles = {
  dropdownMainWrapper: {

  },
  containerOpen: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: Colors.Secondary,
    color: 'white'
  }
}

export default Dropdown;