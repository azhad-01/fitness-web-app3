function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var program = document.getElementById("program").value;

  if (name && email && program) {
    alert("Form submitted!");
  } else {
    alert("Form not complete!");
  }
}
