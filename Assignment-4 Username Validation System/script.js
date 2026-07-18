function validateUsername() {
    let username = document.getElementById("username").value.trim();

    // change into lowercase
    username = username.toLowerCase();

    let message = document.getElementById("message");

    // Empty input
    if (username == "") {
        message.innerHTML = "Please enter a username.";
        message.style.color = "red";
        return;
    }

    // Minimum length
    if (username.length < 5) {
        message.innerHTML = "Username must be at least 5 characters.";
        message.style.color = "red";
        return;
    }

    // Maximum length
    if (username.length > 15) {
        message.innerHTML = "Username must not exceed 15 characters.";
        message.style.color = "red";
        return;
    }

    // Space check
    if (username.includes(" ")) {
        message.innerHTML = "Username cannot contain spaces.";
        message.style.color = "red";
        return;
    }

    // First character must be an alphabet
    let firstChar = username[0];

    if (firstChar < "a" || firstChar > "z") {
        message.innerHTML = "Username must start with an alphabet.";
        message.style.color = "red";
        return;
    }

    // Valid username
    message.innerHTML = "Username is valid.";
    message.style.color = "green";
}