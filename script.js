const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

const strengthText = document.getElementById("strengthText");
const strengthProgress = document.getElementById("strengthProgress");

const lengthCheck = document.getElementById("length");
const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numberCheck = document.getElementById("number");
const specialCheck = document.getElementById("special");
const uniqueCheck = document.getElementById("unique");

const suggestionList = document.getElementById("suggestionList");

const generateButton = document.getElementById("generatePassword");
const generatedPassword = document.getElementById("generatedPassword");
const copyButton = document.getElementById("copyPassword");


// Show / Hide Password
togglePassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "Show";
    }

});


// Check for obvious repeated patterns
function hasRepeatedPattern(password) {

    if (!password) {
        return false;
    }

    if (/^(.)\1+$/.test(password)) {
        return true;
    }

    if (/^(..+)\1+$/.test(password)) {
        return true;
    }

    const commonPatterns = [
        "password",
        "123456",
        "12345678",
        "qwerty",
        "qwerty123",
        "admin",
        "letmein",
        "welcome"
    ];

    return commonPatterns.some(pattern =>
        password.toLowerCase().includes(pattern)
    );
}


// Update requirement display
function updateRequirement(element, condition) {

    if (condition) {
        element.textContent = "✓ " + element.textContent.substring(2);
        element.classList.add("valid");
    } else {
        element.textContent = "○ " + element.textContent.substring(2);
        element.classList.remove("valid");
    }

}


// Analyze password
function analyzePassword() {

    const password = passwordInput.value;

    if (password.length === 0) {

        strengthText.textContent = "---";
        strengthProgress.style.width = "0%";

        updateRequirement(lengthCheck, false);
        updateRequirement(uppercaseCheck, false);
        updateRequirement(lowercaseCheck, false);
        updateRequirement(numberCheck, false);
        updateRequirement(specialCheck, false);
        updateRequirement(uniqueCheck, false);

        suggestionList.innerHTML =
            "<li>Enter a password to see security suggestions.</li>";

        return;
    }


    const hasLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);
    const hasPattern = hasRepeatedPattern(password);

    const isUnique = !hasPattern;


    updateRequirement(lengthCheck, hasLength);
    updateRequirement(uppercaseCheck, hasUppercase);
    updateRequirement(lowercaseCheck, hasLowercase);
    updateRequirement(numberCheck, hasNumber);
    updateRequirement(specialCheck, hasSpecial);
    updateRequirement(uniqueCheck, isUnique);


    let score = 0;

    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (hasUppercase) score++;
    if (hasLowercase) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;
    if (isUnique) score++;


    let strength;
    let percentage;

    if (score <= 2) {

        strength = "Very Weak";
        percentage = 20;

    } else if (score === 3) {

        strength = "Weak";
        percentage = 35;

    } else if (score === 4) {

        strength = "Medium";
        percentage = 55;

    } else if (score === 5) {

        strength = "Strong";
        percentage = 75;

    } else {

        strength = "Very Strong";
        percentage = 100;

    }


    strengthText.textContent = strength;
    strengthProgress.style.width = percentage + "%";


    const suggestions = [];

    if (!hasLength) {
        suggestions.push("Use at least 8 characters.");
    }

    if (password.length < 12) {
        suggestions.push("For better security, use 12 or more characters.");
    }

    if (!hasUppercase) {
        suggestions.push("Add at least one uppercase letter.");
    }

    if (!hasLowercase) {
        suggestions.push("Add at least one lowercase letter.");
    }

    if (!hasNumber) {
        suggestions.push("Add at least one number.");
    }

    if (!hasSpecial) {
        suggestions.push("Add at least one special character.");
    }

    if (!isUnique) {
        suggestions.push("Avoid common passwords and repeated patterns.");
    }

    if (suggestions.length === 0) {
        suggestions.push("Excellent! Your password meets the recommended criteria.");
    }


    suggestionList.innerHTML = "";

    suggestions.forEach(suggestion => {

        const li = document.createElement("li");
        li.textContent = suggestion;
        suggestionList.appendChild(li);

    });

}


passwordInput.addEventListener("input", analyzePassword);


// Generate strong password
function generateStrongPassword(length = 16) {

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const special = "!@#$%^&*()-_=+";

    const allCharacters =
        uppercase + lowercase + numbers + special;

    const randomCharacter = characters =>
        characters[Math.floor(Math.random() * characters.length)];


    let password =
        randomCharacter(uppercase) +
        randomCharacter(lowercase) +
        randomCharacter(numbers) +
        randomCharacter(special);


    while (password.length < length) {
        password += randomCharacter(allCharacters);
    }


    return password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
}


generateButton.addEventListener("click", () => {

    const password = generateStrongPassword();

    generatedPassword.value = password;

});


copyButton.addEventListener("click", async () => {

    if (!generatedPassword.value) {
        return;
    }

    try {

        await navigator.clipboard.writeText(
            generatedPassword.value
        );

        copyButton.textContent = "Copied!";

        setTimeout(() => {
            copyButton.textContent = "Copy";
        }, 1500);

    } catch (error) {

        alert("Unable to copy password.");

    }

});