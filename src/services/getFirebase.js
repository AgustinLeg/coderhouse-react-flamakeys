import firebase from "firebase";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqMyB0UItSsRHRNoZqn1-Pkmg8UJFOmWI",
  authDomain: "flamakeys-coderhouse.firebaseapp.com",
  projectId: "flamakeys-coderhouse",
  storageBucket: "flamakeys-coderhouse.appspot.com",
  messagingSenderId: "329113456385",
  appId: "1:329113456385:web:763dc99fc2ba09522ed500",
};

const app = firebase.initializeApp(firebaseConfig);


export function getFirestore(){
    return firebase.firestore(app);
}