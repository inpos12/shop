import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAALhHXfBgearHuGsFV0zv5C4G7r0LZRxc",
  authDomain: "shoplogin-eae2c.firebaseapp.com",
  projectId: "shoplogin-eae2c",
  storageBucket: "shoplogin-eae2c.appspot.com",
  messagingSenderId: "530289261882",
  appId: "1:530289261882:web:70b8073957726aea27e403",
  measurementId: "G-71VEVNMCYP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// //////
export default app;
