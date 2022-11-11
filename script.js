function showResults() {
  var userName = document.getElementById("userName").value;
  var password = document.getElementById("password").value;
  console.log(userName, password);

  if (userName && password) {
    document.getElementById("loginModel").style.display = "none";
    document.getElementById("resultModel").style.display = "block";
  }
}
