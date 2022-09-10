var firebaseConfig = {
    apiKey: "AIzaSyDazGLI8Nbx-RwMWqeixTOoUbEkhVU1umg",
    authDomain: "kwitter-pro-93df3.firebaseapp.com",
    databaseURL: "https://kwitter-pro-93df3-default-rtdb.firebaseio.com",
    projectId: "kwitter-pro-93df3",
    storageBucket: "kwitter-pro-93df3.appspot.com",
    messagingSenderId: "826188724506",
    appId: "1:826188724506:web:305818baa722ca6dfd14a3"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

function addRoom()
    {
          room_name=document.getElementById("room_name").value;
          
          firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log(Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}