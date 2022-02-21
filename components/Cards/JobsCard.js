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
        <span style={styles.left}>Company: <span style={{fontSize: 12}}>{company}</span></span>
        <span style={styles.middle}>Position: {position}</span>
        <span style={styles.right}>HomePage: {hp}</span>
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
    backgroundColor: '#FFE4C4',
    padding: '10px 10px',
    fontSize: 14,
    borderRadius: 10,
    gap: 10,
    width: 500
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  left: {
    display: 'block',
    textAlign: 'start'
  },
  middle: {
    display: 'block',
    textAlign: 'center'
  },
  right: {
    display: 'block',
    textAlign: 'end'
  }
};

export default JobsCard;