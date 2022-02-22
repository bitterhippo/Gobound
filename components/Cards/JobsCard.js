import Colors from "../Colors";
import StyledLink from "../StyledLink/StyledLink";

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
        <div style={styles.linkDiv}>
          Company: 
          <StyledLink
          to={hp}
          name={<span style={styles.smallText}>{company}</span>} 
          color={Colors.Secondary}
          />
        </div>
        <div style={styles.linkDiv}>
          Position: 
          <StyledLink
          to={jd}
          name={position}
          color={Colors.Secondary}
        />
        </div>
      </div>
      {/*    second row of card    */}
      <div style={styles.tableRow}>
        <span>Career: {career}</span>
        <span>Japanese: {japanese}</span>
        <span>Income: {income}</span>
        <span>Age: {age}</span>
      </div>
      {/*    third row of card    */}
      <div style={styles.tableRow}>
        <span>Prefered Skills: {skills}</span>
      </div>
      {/*    fourth row of card    */}
      <div style={styles.tableRow}>
        <span>Conditions: <span style={styles.smallText}>{conditions}</span></span>
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
    justifyContent: 'space-between'
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
  },
  linkDiv: {
    display: 'flex',
    flexDirecton: 'row'
  },
  smallText: {
    fontSize: 12
  }
};

export default JobsCard;