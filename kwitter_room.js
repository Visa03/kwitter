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



username=localStorage.getItem("username");
document.getElementById("p").innerHTML="Welcome"+username;

function addroom(){
      roomname=document.getElementById("tiaddroom").value;
      firebase.database().ref("/").child(roomname).update({purpose:"adding room name"});
      localStorage.setItem("The room is",roomname);
      window.location="kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function logout(){
      localStorage.removeItem("username");
      window.location="index.html";
}
function entertheroom(name){
localStorage.setItem("The room is",name);
window.location="kwitter_page.html";
}

