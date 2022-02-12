import Colors from "../Colors"


const StyledButton = (props) => {
  return (
    <button style={styles.styledButton}>
      {props.children}
    </button>
  )
}

const styles = {
  styledButton: {
    cursor: 'pointer',
    border: '1px solid white',
    borderRadius: 5,
    color: 'white',
    backgroundColor: Colors.Secondary,
    width: 100,
    padding: '5px 5px'
  }
};

export default StyledButton;