function validationName() {
    var nameInput = document.getElementById("contact-name");
    var nameRegex = /^[a-zA-Z]+$/;
  
    if (!nameRegex.test(nameInput.value)) {
      document.getElementById("name-r").innerText = "Invalid name";
    } else {
      document.getElementById("name-r").innerText = "";
    }
  }
  
  function validationEmail() {
    var emailInput = document.getElementById("contact-email");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(emailInput.value)) {
      document.getElementById("email-r").innerText = "Invalid email";
    } else {
      document.getElementById("email-r").innerText = "";
    }
  }
  
  function validationAddress() {
    var addressInput = document.getElementById("contact-address");
  
    if (addressInput.value.trim() === "") {
      document.getElementById("address-r").innerText = "Address cannot be empty";
    } else {
      document.getElementById("address-r").innerText = "";
    }
  }
  
  function validateForm() {
    var nameInput = document.getElementById("contact-name");
    var emailInput = document.getElementById("contact-email");
    var addressInput = document.getElementById("contact-address");
  
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || addressInput.value.trim() === "") {
      alert("Please fill in all required fields.");
      return;
    }
  
    alert("Form submitted successfully!");
  }
  