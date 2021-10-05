 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCVN4hoDgLokHKd4DurMr6TF2_xWU2BUjQ",
  authDomain: "activity93kwitter.firebaseapp.com",
  databaseURL: "https://activity93kwitter-default-rtdb.firebaseio.com",
  projectId: "activity93kwitter",
  storageBucket: "activity93kwitter.appspot.com",
  messagingSenderId: "728220449176",
  appId: "1:728220449176:web:3d535700e8f2d5698193ed"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser(){
     user_name= document.getElementById("user_name").value;
     firebase.database().ref("/").child(user_name).update({
         purpose:"adding user"
     });
}