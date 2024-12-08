# Perform a security check of the booking system, 5 most important points that shoulde be fixed:

## Problem nr. 1:
* What is wrong?
    * User can choose own birthdate when the system age limit is 15.
* How did you find it?
    * In the registration form.
* How should it work/What should be fixed?
    * Input- & Server-Side validation.
    * Age Input Handling.
    * User feedback.
    * Database Integrity.
    * Security Measures (protect the form and API edpoints against malicious inputs).
    * Testing and Fixing Issues.

## Problem nr. 2:
* What is wrong?
    * Allowing users to choose their role during registration, such as "reserver" or "administrator".
* How did you find it?
    * In the registration form.
* How should it work/What should be fixed?
    * Define Role Selection Logic.
    * Role Management on the Backend.
    * UI Feedback.
    * Audit and Logging.
    * Security Fixes. Remove Administrator Role from UI (hide it).
    * Authorization and Permissions.
    * Testing and Fixing Issues.

## Problem nr. 3:
* What is wrong?
    * This page contains an error/warning message that may disclose sensitive information like the location of the file that produced the unhandled exception. This information can be used to launch further attacks against the web application. The alert could be a false positive if the error message is found inside a documentation page.
* How did you find it?
    * ZAP - Spider Attack.
* How should it work/What should be fixed?
    * Review the source code of this page. Implement custom error pages. Consider implementing a mechanism to provide a unique error reference/identifier to the client (browser) while logging the details on the server side and not exposing them to the user.

## Problem nr. 4:
* What is wrong?
    * A Format String error occurs when the submitted data of an input string is evaluated as a command by the application. Potential Format String Error. The script closed the connection on a /%s.
* How did you find it?
    * ZAP - Active Scan (round: 5).
* How should it work/What should be fixed?
    * Rewrite the background program using proper deletion of bad character strings. This will require a recompile of the background executable.

## Problem nr. 5: Password Security Practices
* What is wrong?
    * The passwords are hashed using `bcrypt`, which is good. However, a manual salt is generated and passed into `bcrypt.hash`, which is unnecessary as `bcrypt` internally manages salting securely. This introduces the risk of developer error in managing salts.
* How did you find it?
* How should it work/What should be fixed?