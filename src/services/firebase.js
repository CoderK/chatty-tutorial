import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCczXVsnHdNW1jTbsJGQy8-m_VCfhg5JF4',
  authDomain: "chatty-1dc41.firebaseapp.com",
  databaseURL: "https://chatty-1dc41.firebaseio.com"
};
firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();