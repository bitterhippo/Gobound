const ContentWrapper = (props) => {
  return (
    <div style={styles.contentWrapper}>
      {props.children}
    </div>
  )
};

const styles = {
  contentWrapper: {
    width: '90%',
    margin: '30px auto 0 auto',
  }
};

export default ContentWrapper;