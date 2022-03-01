import { useState } from "react";
import Colors from "../Colors";

const Dropdown = ({ name, options }) => {

  //Component currently isn't using props values and instead using the defaults provided on line 11.

  const [toggleOpen, setToggleOpen] = useState(false);
  const [hoverdItem, setHoveredItem] = useState('');

  const openDiv = () => {

    return <div style={styles.containerOpen}>
      {
        options.map(current => <div
        key={current}
        onMouseEnter={() => setHoveredItem(current)}
        onMouseLeave={() => setHoveredItem('')}
        style={{ backgroundColor: hoverdItem === current ? 'red' : Colors.Secondary}}
        >{current}</div>)
      }
    </div>
    
  }

  return (
    <div
      style={styles.dropdownMainWrapper}>
      <div
      onClick={() => setToggleOpen(!toggleOpen)}
      >
        { name }
      </div>
      {toggleOpen && openDiv()}
    </div >
  )
};

const styles = {
  dropdownMainWrapper: {
    cursor: 'pointer'
  },
  containerOpen: {
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    backgroundColor: Colors.Secondary,
    color: 'white',
    width: 200,
    opacity: 0.6,
    zIndex: 1,
    border: '1px solid black',
    cursor: 'pointer'
  },
}

export default Dropdown;