import firebase from "firebase/app";
import "firebase/auth";

export const auth=firebase.initializeApp( {
    apiKey: "AIzaSyD129UjXSM8vtTlYL3XGulaOv6k8iYcJys",
    authDomain: "chat-b584d.firebaseapp.com",
    projectId: "chat-b584d",
    storageBucket: "chat-b584d.appspot.com",
    messagingSenderId: "635175430696",
    appId: "1:635175430696:web:b904005afdc78c6cb9231d"
  }).auth();