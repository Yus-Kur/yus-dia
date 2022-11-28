// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmI16UAi0IRWVB7yAd5q_2xeiQ33HknEg",
  authDomain: "yus-dia.firebaseapp.com",
  projectId: "yus-dia",
  storageBucket: "yus-dia.appspot.com",
  messagingSenderId: "667537472233",
  appId: "1:667537472233:web:d502766983ff7971914e78",
  measurementId: "G-PZD83B6GGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

///ブラウザのみで動作させる
if(typeof window !== 'undefined'){
  const analytics = getAnalytics(app);
}