let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
let login = document.getElementById("login");
let email = document.getElementById("email");
let password = document.getElementById("password");



menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}


function adminLogin(){
  console.log("function called");
  if (email.value == "shivyelave@gmail.com" && password.value == "12345678") {
    window.location.href="admin.html"
    
  }
}