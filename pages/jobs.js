import { Main } from 'next/document';
import { useState, useEffect } from 'react';
import CustomTable from '../components/Tables/CustomTable';


//Subcomponents
import defaultData from "../components/DefaultData";
import Navbar from '../components/Navbars/Navbars';
import MainScreen from '../components/PPC/MainScreen';

//KNOWN BUG: This page is not correctly rendering data as the result of a "Hydration" issue. remember to water your components.

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

  const navDefaults = [
    { to: '/', name: 'Home' },
    { to: '/personel', name: 'Personel' }
  ];


  return <div>
    <MainScreen>
    <Navbar links={navDefaults} />
      <CustomTable />
    </MainScreen>
  </div>
};

export default Jobs;