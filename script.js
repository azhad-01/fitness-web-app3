function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var program = document.getElementById("program").value;

  // Simple email regex pattern
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name && email && program) {
    if (emailPattern.test(email)) {
      alert("Form submitted!");
      return true;
    } else {
      alert("Please enter a valid email address (example: user@domain.com)!");
      return false;
    }
  } else {
    alert("Form not complete!");
    return false;
  }
}
