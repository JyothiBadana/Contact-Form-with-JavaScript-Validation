# Interview Questions and Answers – Contact Form Validation

**1. How to validate form inputs in JavaScript?**  
Use JavaScript event listeners and conditional logic to check if input values meet criteria like being non-empty or matching a pattern. Example: check if the name is not empty or if the email is valid.

**2. What is event.preventDefault()?**  
It prevents the browser's default behavior for an event. In form validation, it stops the form from submitting before validation is complete.

**3. How to check email format with regex?**  
Use a regular expression like `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` to match standard email patterns.

**4. Difference between client-side and server-side validation?**  
Client-side validation happens in the browser and improves user experience. Server-side validation happens on the server and is essential for security. Both should be used.

**5. How to show error messages dynamically?**  
Access and modify HTML elements via DOM (e.g., `element.textContent = "Error"`), typically below the respective input field when a condition fails.

**6. What is form submission?**  
Form submission is sending form data to a server for processing (e.g., via POST or GET method). In this project, it's simulated without a real server.

**7. How to improve form accessibility?**  
Use `<label>` elements with `for` attributes matching input IDs, use ARIA roles if needed, and maintain proper tab order for keyboard navigation.

**8. How to handle form reset?**  
Use the JavaScript method `form.reset()` to clear all input values to their default.

**9. What are common security issues with forms?**  
- XSS (Cross-site scripting)
- SQL injection (server-side)
- CSRF (Cross-site request forgery)
- Spam (bot submissions)

**10. How does HTML5 built-in validation differ from JS validation?**  
HTML5 uses attributes like `required`, `type="email"`, and `pattern`. JavaScript gives more control for custom checks and dynamic feedback.
