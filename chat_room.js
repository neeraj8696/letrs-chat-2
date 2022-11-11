username = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "welcome" + username + "!"
function addRoom()
{
  roomname = document.getElementById("room_name").value 
  firebase.database().ref("/").child("room_name").update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name" , roomname)
  window.location = "chat_page.html"
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log(Room_names)
    row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>"
    document.getElementById("output").innerHTML += row
 });
});
}
getData();
function redirect(name)
{
  console.log(name)
  localStorage.setItem("room_name" , name )
window.location = "kwitter_page.html"
}
function logout()
{
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location= "index.html"
}