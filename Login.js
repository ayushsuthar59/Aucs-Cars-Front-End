document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // check the password
    
        // Simple validation (you can replace this with your own logic)
        if (username == "ayush2159.be21@chitkara.edu.in" && password == "password") {
          errorMessage.textContent = "";
          // console.log(password.length);
          alert("Login successful!");
        } else {
          errorMessage.textContent = "Invalid username or password";
        }
      }
    
    
      );
  });
  