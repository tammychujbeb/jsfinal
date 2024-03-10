(function () {
    
   
    let form = document.getElementById("registration-form");
    let submitButton = form.querySelector("button");
    
    let passwordInput = document.getElementById("password");
    let confirmPasswordInput = document.getElementById("confirm-password");

    let checkPasswords = function() {
        let passwordsMatch = passwordInput.value === confirmPasswordInput.value;
        if (passwordsMatch) {
            
            confirmPasswordInput.setCustomValidity("");
        } else {
            
            confirmPasswordInput.setCustomValidity("Las contraseñas no coinciden.");
        }
    };

    let addPasswordInputEventListeners = function() {
        passwordInput.addEventListener("input", checkPasswords, false);
        confirmPasswordInput.addEventListener("input", checkPasswords, false);
    };

    let formSubmissionAttempted = function() {
        form.classList.add("submission-attempted");
    };

    let addSubmitClickEventListener = function() {
        submitButton.addEventListener("click", formSubmissionAttempted, false);
    };

    addPasswordInputEventListeners();
    addSubmitClickEventListener();

}());
