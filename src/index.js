import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import App from './components/NavBar';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFhbMI5FBjBKDJdeiWEbfO-htHIKbiaPs",
  authDomain: "delatierra-react.firebaseapp.com",
  projectId: "delatierra-react",
  storageBucket: "delatierra-react.appspot.com",
  messagingSenderId: "317095313160",
  appId: "1:317095313160:web:0e29181484448937ecf6bd"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
