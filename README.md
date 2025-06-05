# Contact-Form-with-JavaScript-Validation

This project is a simple and responsive contact form built with **HTML, CSS, and JavaScript**. It includes **client-side input validation** for Name, Email, and Message fields to enhance user experience and prevent invalid form submissions.

## Tools Used
* HTML5
* CSS3
* JavaScript (Vanilla)
* VS Code
* Chrome Browser

## Features
* Input fields: Name, Email, and Message
* Client-side validation using JavaScript
* Email format validation with regex
* Inline error messages for invalid inputs
* Prevents submission of incomplete/invalid forms
* Displays success message on valid submission (no backend)

##Validation Rules
* **Name**: Required, cannot be empty
* **Email**: Required, must follow valid email format
* **Message**: Required, minimum length recommended

## How to Use
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/contact-form-validation.git
   ```
2. Open the project folder in VS Code.
3. Open `index.html` in your browser.
4. Try submitting with empty fields or invalid email to test validation.

## Edge Case Testing
* Submitting empty form
* Invalid email inputs (e.g., missing `@`, `.com`)
* Special characters in name or message
