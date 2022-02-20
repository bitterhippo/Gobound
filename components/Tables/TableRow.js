const TableRow = ({ jobsData }) => {

  const jobKeys = Object.keys(jobsData);

  return (
    <div style={styles.tableRowWrapper}>
      {
        jobKeys.map((cv,i) => <div
          key={`${cv}-${i}`}
        >
          {jobsData[cv]}
          </div>)
      }
    </div>
  )
};

const styles = {
  tableRowWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
};

export default TableRow;