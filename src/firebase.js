import { initializeApp } from 'firebase/app';

import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
    apiKey: "AIzaSyAshWMTrrxhOfkdYw6jurk09kQPuWyqxMo",
    authDomain: "deedmed-lives.firebaseapp.com",
    databaseURL: "https://deedmed-lives-default-rtdb.firebaseio.com",
    projectId: "deedmed-lives",
    storageBucket: "deedmed-lives.appspot.com",
    messagingSenderId: "125946472518",
    appId: "1:125946472518:web:30c0528e3eb96c96ecc247",
    measurementId: "G-QY7S8RF9TY"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});

export const getTokenFrom = (setTokenFound) => {
    console.log('testing');
    return getToken(messaging, {vapidKey: 'BDe6F72v1JQcxpTb_UGS5WWQwGQEzcyTRR02JVTw7-AgktIUts_LiDXBbKLtwL9YDOSmDJlUwaeweN40RAiT_AY'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }
  