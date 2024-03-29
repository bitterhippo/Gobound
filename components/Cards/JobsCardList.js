//Subcomponents Data
import JobsCard from "./JobsCard";

const JobsCardList = ({ tableData }) => {

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
      {tableData.map((cv, i) => <JobsCard 
      key={i}
      jobsData={cv}
      />)}
    </>
  )
};

const styles = {

};

export default JobsCardList;