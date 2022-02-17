import { Main } from "next/document";
import Navbar from "../components/Navbars/Navbars";
import MainScreen from "../components/PPC/MainScreen";

function Personel() {

  const navDefaults = [
    { to: '/', name: 'Home' },
    { to: '/jobs', name: 'Jobs' }
  ];

  return (
    <div>
      <MainScreen>
        <Navbar links={navDefaults} />
        Personel
      </MainScreen>
    </div>
  )
};

export default Personel;