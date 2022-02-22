import { useState, useEffect } from 'react';
import JobsCardList from '../components/Cards/JobsCardList';


//Subcomponents
import defaultData from "../components/DefaultData";
import Navbar from '../components/Navbars/Navbars';
import MainScreen from '../components/PPC/MainScreen';
import ContentWrapper from '../components/PPC/ContentWrapper';
import Dropdown from '../components/Dropdowns/Dropdown';
import JobsInput from '../components/Inputs/JobsInput';

//KNOWN BUG: This page is not correctly rendering data as the result of a "Hydration" issue. remember to water your components.

function Jobs() {

  const [apiData, setApiData] = useState();

  const data = [
    { name: 'lolbert', contract: 'some dumb shit', country: 'amerika' },
    { name: 'lolbert1', contract: 'some dumb shit', country: 'amerika' },
    { name: 'lolbert2', contract: 'some dumb shit', country: 'amerika' }
  ];

  const navDefaults = [
    { to: '/', name: 'Home' },
    { to: '/personel', name: 'Personel' }
  ];


  return <div>
    <MainScreen>
      <Navbar links={navDefaults} />
      <ContentWrapper>
        <JobsInput />
        <JobsCardList tableData={defaultData} />
      </ContentWrapper>
    </MainScreen>
  </div>
};

const styles = {

};

export default Jobs;