import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB01GgCVrjqknp7tpd6eaYaEXYO-hNBLbE",
  authDomain: "foodie-eb5cd.firebaseapp.com",
  databaseURL: "https://foodie-eb5cd-default-rtdb.firebaseio.com",
  projectId: "foodie-eb5cd",
  storageBucket: "foodie-eb5cd.appspot.com",
  messagingSenderId: "39097053893",
  appId: "1:39097053893:web:ea5b00a1e747e8f6efb6ac",
  measurementId: "${config.measurementId}",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
