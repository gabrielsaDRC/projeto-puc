import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBc10CJNdnhiIeyuoW0psaq0XfkPD09dec",
    authDomain: "projetoead-fbf7c.firebaseapp.com",
    projectId: "projetoead-fbf7c",
    storageBucket: "projetoead-fbf7c.appspot.com",
    messagingSenderId: "214726701948",
    appId: "1:214726701948:web:eba88bde010a5af22c6af9"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;