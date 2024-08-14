// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqGFtEfSKrFk8FBYMFmKx8CMtrvxiDXTo",
  authDomain: "shop-fb3c5.firebaseapp.com",
  projectId: "shop-fb3c5",
  storageBucket: "shop-fb3c5.appspot.com",
  messagingSenderId: "246108791519",
  appId: "1:246108791519:web:fe3080bd927e073aa87f6a",
  measurementId: "G-ZGV1RMLB5Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
