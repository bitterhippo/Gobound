const CustomTable = ({ tableData }) => {

  const tableDefaults = [
    'Company / 企業名',
    'HP / 企業URL',
    'Career / 新卒/中途',
    'Position / ポジション',
    'JD / 求人URL',
    'Age / 年齢',
    'Income / 年収',
    'Japanese /日本語',
    'Conditions / 必須条件',
    'Preferred Skills / 歓迎スキル'
  ];

  console.log(tableData);

  return (
    <div style={styles.tableHeader}>
      {
        tableDefaults.map((ci, i) => <div
          key={i}
        >
          {ci}
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