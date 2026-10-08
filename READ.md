# 🔐 Password Strength Analyzer

A web-based Password Strength Analyzer that evaluates the strength of user-entered passwords based on length, character complexity, and common password patterns.

## 📌 Project Overview

The Password Strength Analyzer helps users understand how secure their passwords are and provides suggestions to improve weak passwords.

The application analyzes passwords in real time and checks for:

* Password length
* Uppercase letters
* Lowercase letters
* Numbers
* Special characters
* Common passwords and repeated patterns

It also provides a strong password generator to help users create more secure passwords.

## ✨ Features

* 🔍 Real-time password strength analysis
* 📏 Password length checking
* 🔠 Uppercase and lowercase character checking
* 🔢 Number detection
* 🔣 Special character detection
* 🚫 Detection of common and repeated password patterns
* 💡 Security suggestions
* 🔐 Strong password generator
* 📋 Copy generated password
* 👁 Show/Hide password option
* 🔒 Passwords are analyzed locally and are not stored

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* Regular Expressions (Regex)

## 📂 Project Structure

```text
Password-Strength-Analyzer/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How It Works

The application evaluates a password using several security criteria.

### 1. Length

The application checks whether the password contains at least 8 characters.

### 2. Character Complexity

The password is checked for:

* Uppercase letters
* Lowercase letters
* Numbers
* Special characters

### 3. Pattern Detection

The application detects obvious weak patterns such as:

* `12345678`
* `password`
* `qwerty`
* Repeated characters such as `aaaaaa`

### 4. Strength Calculation

A score is calculated based on the number of security requirements satisfied.

The password is classified as:

* Very Weak
* Weak
* Medium
* Strong
* Very Strong

### 5. Password Suggestions

If the password does not satisfy a requirement, the application provides suggestions for improving it.

### 6. Strong Password Generation

The application can generate a random password containing:

* Uppercase letters
* Lowercase letters
* Numbers
* Special characters

## ▶️ How to Run

1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html`.
4. Run the file using a browser or VS Code Live Server.
5. Enter a password and check its strength.

## 🔐 Security Concepts Learned

This project provides practical understanding of basic password security concepts such as:

* Password complexity
* Password length
* Common password patterns
* Password uniqueness
* Secure password generation
* Basic cryptography and security concepts
* Importance of avoiding weak and predictable passwords

## 🚀 Future Improvements

Possible future enhancements include:

* Password history checking using a database
* Secure password hashing
* Detection of compromised passwords
* Integration with a password breach checking API
* More advanced password entropy calculation
* Dark mode
* Improved accessibility

## ⚠️ Security Note

This project is designed for educational purposes.

Passwords entered into the analyzer are processed locally in the browser and are not stored by the application.

## 👩‍💻 Author

**SRIMATHY R**

Password Strength Analyzer — Thiranex Internship Project
