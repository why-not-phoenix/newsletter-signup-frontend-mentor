// Get the form element
const form = document.getElementById('form');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Add a submit event listener
form.addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Create a FormData object from the form
    const formData = new FormData(form);

    // Access form data
    const email = formData.get('email');

    // Log the values
    console.log('Email:', email);

    if (isValidEmail(email)){
        //success
        document.querySelector("b").innerHTML = email;
        document.querySelector(".card").setAttribute("class", "card hide");
        document.querySelector(".attribution").setAttribute("class", "hide");
        document.querySelector(".success-box").classList.remove("hide");
        document.querySelector(".dismiss").addEventListener("click", function () {
            location.reload(); // Reloads the page
        });

    }else {
        //error
        document.querySelector(".error-message").classList.remove("hide");
        document.querySelector("#email").setAttribute("class", "input-box email-base email-error");
    }
    
    

});

function isValidEmail(userEmail) {
    return emailRegex.test(userEmail);
  }