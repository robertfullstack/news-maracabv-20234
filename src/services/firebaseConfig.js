import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
// import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBeDW4AqqzpiXxOr5VoA4EQIGYqlsFctwI",
  authDomain: "maravilhosa-salgados.firebaseapp.com",
  projectId: "maravilhosa-salgados",
  storageBucket: "maravilhosa-salgados.appspot.com",
  messagingSenderId: "721566638749",
  appId: "1:721566638749:web:7481c50cb4af6a91aa6a74"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const database = firebase.database(); // Chame o método diretamente em 'firebase'
// const auth = firebase.auth(); // Chame o método diretamente em 'firebase'

// export { storage, database, auth, firebase as default };
export { storage, database, firebase as default };