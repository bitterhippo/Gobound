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

  let { company, hp, career, position, jd, age, income, japanese, conditions, prefferedSkills } = jobsData;


  return (

    <div style={styles.jobCardWrapper}>
      {/*     first row of card    */}
      <div style={styles.headerRow}>
        <div>
          Company: {company}
        </div>
        <div>
          HomePage: {hp}
        </div>
      </div>
      {/*    second row of card    */}
    </div>
  )
};

const styles = {
  jobCardWrapper: {
    display: 'flex',
    justifyContent: 'column',
    border: '1px solid black',
    backgroundColor: 'gray',
    padding: '10px 10px',
    fontSize: 14
  },
  headerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};

export default JobsCard;