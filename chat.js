// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBc2tHtrkYUqr2xiCk-KIMQGFEm2vzrrME",
    authDomain: "lets-chat-web-app-10487.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-10487-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-10487",
    storageBucket: "lets-chat-web-app-10487.appspot.com",
    messagingSenderId: "1079193267077",
    appId: "1:1079193267077:web:1e5c9af6c50afd7a3872ec"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



