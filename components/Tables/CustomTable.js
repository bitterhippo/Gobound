//Subcomponents Data
import Colors from "../Colors";
import TableRow from "./TableRow";

const CustomTable = ({ tableData }) => {

  const tableDefaults = [
    'Company/企業名',
    'HP/企業URL',
    'Career/新卒/中途',
    'Position/ポジション',
    'JD/求人URL',
    'Age/年齢',
    'Income/年収',
    'Japanese/日本語',
    'Conditions/必須条件',
    'Preferred Skills/歓迎スキル'
  ];

  //Main Render Function

  return (
    <>
      <div style={styles.tableHeader}>
        {
          tableDefaults.map((ci, i) => <div
            style={styles.tableHeaderCells}
            key={i}
          >
            {ci.split('/')[0]}
            <br></br>
            {ci.split('/')[1]}
          </div>)
        }
      </div>
      <div>
        {!tableData && <div> No table data detected </div>}
        {tableData && <div>
          {
            tableData.map(jobListingData => <TableRow 
              jobsData={jobListingData}
            />)
          }
        </div>}
      </div>
    </>
  )
};

const styles = {
  tableHeader: {
    display: 'flex',
    fleDirection: 'row',
    justifyContent: 'space-evenly'
  },
  tableHeaderCells: {
    fontSize: 14,
    textAlign: 'center',
    borderBottom: `1px solid ${Colors.Primary}`
  }
};

export default CustomTable;