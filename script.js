function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var program = document.getElementById("program").value;

  if (name && email && program) {
    if (email.includes('@')) {
      alert("Form submitted!");
      return true; 
    } else {
      alert("Please enter a valid email address with '@' symbol!");
      return false; 
    }
  } else {
    alert("Form not complete!");
    return false; 
  }
}
