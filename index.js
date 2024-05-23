function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function homeclick() {
  var contact = document.getElementById("contact_menu");
  var home = document.getElementById("home_menu");
  var about = document.getElementById("about_menu");
  var repo = document.getElementById("repo");
  
  home.style.color = "white";
  home.style.backgroundColor = "black";
  if (about.style.color == "white") {
    about.style.color = "black";
    about.style.backgroundColor = "white";
  } else if ((contact.style.color = "white")) {
    contact.style.color = "black";
    contact.style.backgroundColor = "white";
  }else if (repo.style.color = "white") {
    repo.style.color = "black";
    repo.style.backgroundColor = "white";
  }
  
}
function aboutclick() {
  var contact = document.getElementById("contact_menu");
  var home = document.getElementById("home_menu");
  var about = document.getElementById("about_menu");
  var repo = document.getElementById("repo");
  
  about.style.color = "white";
  about.style.backgroundColor = "black";
  if (contact.style.color == "white") {
    contact.style.color = "black";
    contact.style.backgroundColor = "white";
  } else if ((home.style.color = "white")) {
    home.style.color = "black";
    home.style.backgroundColor = "white";
    }else if ((repo.style.color = "white")) {
    repo.style.color = "black";
    repo.style.backgroundColor = "white";
  }
}

function contactclick() {
  var contact = document.getElementById("contact_menu");
  var home = document.getElementById("home_menu");
  var about = document.getElementById("about_menu");
  var repo = document.getElementById("repo");

  contact.style.color = "white";
  contact.style.backgroundColor = "black";
  if (home.style.color == "white") {
    home.style.color = "black";
    home.style.backgroundColor = "white";
  } else if ((about.style.color = "white")) {
    about.style.color = "black";
    about.style.backgroundColor = "white";
  }else if ((repo.style.color = "white")) {
    repo.style.color = "black";
    repo.style.backgroundColor = "white";
  }
}
function repoclick() {
  var repo = document.getElementById("repo");
  var home = document.getElementById("home_menu");
  var about = document.getElementById("about_menu");
  var contact = document.getElementById("contact_menu");

  repo.style.color = "white";
  repo.style.backgroundColor = "black";
  if (home.style.color == "white") {
    home.style.color = "black";
    home.style.backgroundColor = "white";
  }
  else if (contact.style.color == "white") {
    contact.style.color = "black";
    contact.style.backgroundColor = "white";
  }else if (about.style.color = "white") {
    about.style.color = "black";
    about.style.backgroundColor = "white";
  }
  
}
