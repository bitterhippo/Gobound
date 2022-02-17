import { useState, useEffect } from 'react';


//Subcomponents
import defaultData from "../components/DefaultData";

function Jobs() {

  const [apiData, setApiData] = useState();

  useEffect(() => {
    fetch('https://swapi.dev/api/people/1')
      .then((res) => res.json())
      .then((json) => setApiData(json))
  }, []);

  useEffect(() => {
    console.log(apiData)
  }, [apiData]);

  const data = [
    { name: 'lolbert', contract: 'some dumb shit', country: 'amerika' },
    { name: 'lolbert1', contract: 'some dumb shit', country: 'amerika' },
    { name: 'lolbert2', contract: 'some dumb shit', country: 'amerika' }
  ];


  return <div>
    <table>
      <tr>
        <th>Company / 企業名</th>
        <th>HP / 企業URL</th>
        <th>Career / 新卒/中途</th>
        <th>Position / ポジション</th>
        <th>JD / 求人URL</th>
        <th>Age / 年齢</th>
        <th>Income / 年収</th>
        <th>Japanese /日本語</th>
        <th>Conditions / 必須条件</th>
        <th>Preferred Skills / 歓迎スキル</th>
      </tr>
      {/* Data to go here */}
      {
        defaultData.map(({ company, hp, career, position, jd, age, income, japanese, conditions, preferredSkills }) => <tr>
          <th>{company}</th>
          <th>{hp}</th>
          <th>{career}</th>
          <th>{position}</th>
          <th>{jd}</th>
          <th>{age}</th>
          <th>{income}</th>
          <th>{japanese}</th>
          <th>{conditions}</th>
          <th>{preferredSkills}</th>
        </tr>)
      }
    </table>
  </div>
};

export default Jobs;