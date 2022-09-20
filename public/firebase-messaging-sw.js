// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
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
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});