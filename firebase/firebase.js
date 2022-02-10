import firebase from 'firebase';
import 'firebase/analytics';


//Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDD44B8dDHCW-t0U8bnk_StYNrRryY2uBk",
  authDomain: "fir-toot-b954e.firebaseapp.com",
  projectId: "fir-toot-b954e",
  storageBucket: "fir-toot-b954e.appspot.com",
  messagingSenderId: "651655776878",
  appId: "1:651655776878:web:e101de38c9b225bfac347f",
  measurementId: "G-J23441SV9M"
}

if (typeof window!== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase;