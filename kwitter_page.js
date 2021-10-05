var firebaseConfig = {
      apiKey: "AIzaSyCD-dE0HLIk5neRgKCsUQECBgJN2btno8k",
      authDomain: "latest-a2528.firebaseapp.com",
      databaseURL: "https://latest-a2528-default-rtdb.firebaseio.com",
      projectId: "latest-a2528",
      storageBucket: "latest-a2528.appspot.com",
      messagingSenderId: "530440688894",
      appId: "1:530440688894:web:071dbfee9b5550484ac1af"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("username");
      window.location="index.html";
}