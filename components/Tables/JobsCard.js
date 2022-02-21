const JobsCard = ({ jobsData }) => {

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

  let { company, hp, career, position, jd, age, income, japanese, conditions, skills } = jobsData;


  return (

    <div style={styles.jobCardWrapper}>
      {/*     first row of card    */}
      <div style={styles.tableRow}>
        <span>Company: {company}</span>
        <span>Position: {position}</span>
        <span>HomePage: {hp}</span>
      </div>
      {/*    second row of card    */}
      <div style={styles.tableRow}>
        <span>Career: {career}</span>
        <span>Japanese: {japanese}</span>
        <span>JD: {jd}</span>
      </div>
      {/*    third row of card    */}
      <div style={styles.tableRow}>
        <span>Age: {age}</span>
        <span>Income: {income}</span>
        <span>Preffered Skills: {skills}</span>
      </div>
      {/*    fourth row of card    */}
      <div style={styles.tableRow}>
        <span>Conditions: {conditions}</span>
      </div>
    </div>
  )
};

const styles = {
  jobCardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid black',
    backgroundColor: 'gray',
    padding: '10px 10px',
    fontSize: 14,
    borderRadius: 10,
    gap: 10
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
};

export default JobsCard;