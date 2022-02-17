const CustomTable = ({ tableData }) => {

  console.log(tableData);

  return (
    <div style={styles.tableHeader}>
      {
        tableData.map((ci, i) => <div
          key={i}
        >
          {ci.name}
        </div>)
      }
    </div>
  )
};

const styles = {
  tableHeader: {
    display: 'flex',
    fleDirection: 'row',
    justifyContent: 'spaceEvenly'
  },
};

export default CustomTable;