# Perform a security check of the booking system, 5 most important points that shoulde be fixed:

## Problem nr. 1: Age validation
* What is wrong?
    * User can choose own birthdate when the system age limit is 15.
* How did you find it?
    * Observed in `register.js` while ezamining `registerSchema` field.
* How should it work/What should be fixed?
    * Input- & Server-Side validation.
    * Age Input Handling.
    * User feedback.
    * Database Integrity.
    * Security Measures (protect the form and API edpoints against malicious inputs).
    * Testing and Fixing Issues.

## Problem nr. 2: Access Control Weakness in Role Management
* What is wrong?
    * Users can directly choose their roles during registration (`reserver` or `administrator`) via the form without any server-side restrictions.
* How did you find it?
    * Observed in `register.js` while examining the `role` field validation.
* How should it work/What should be fixed?
    * The `role` should not be provided by the user during registration. Instead, assign the default role (`reserver`) server-side.
    * Allow role escalation (`administrator`) only via a secure process, such as an admin-controlled dashboard.

## Problem nr. 3: SQL Injection Vulnerability in Database Queries
* What is wrong?
    * The application uses parameterized queries, which is good. However:
        * `username` is checked for uniqueness using `client.queryArray` without adequate consideration for potential email casing issues. This might allow duplicate emails like `user@domain.com` and `User@Domain.com` due to case-insensitive behavior.
* How did you find it?
    * Observed in `register.js` during the implementation of the `isUniqueUsername` function.
* How should it work/What should be fixed?
    * Normalize emails to lowercase before storing and comparing them in the database.
    * Add a unique index constraint on the `username` column in the database to enforce uniqueness at the database level.

## Problem nr. 4: Session Management Security
* What is wrong?
    * The session data is stored in an in-memory session store (`sessionStore` in `sessionService.js`), which lacks scalability and persistence. Additionally:
        * No enforcement of session expiration on the server side.
        * Session IDs are generated with `crypto.randomUUID()` but are stored without encryption.
* How did you find it?
    * Found during the review of `sessionService.js` and `app.js`.
* How should it work/What should be fixed?
    * Store sessions in a persistent and scalable session store, such as Redis, with expiration policies.
    * Encrypt session data at rest.
    * Ensure expired sessions are actively invalidated server-side.

## Problem nr. 5: Password Security Practices
* What is wrong?
    * The passwords are hashed using `bcrypt`, which is good. However, a manual salt is generated and passed into `bcrypt.hash`, which is unnecessary as `bcrypt` internally manages salting securely. This introduces the risk of developer error in managing salts.
* How did you find it?
    * Observed in the `register.js` code while reviewing the user registration logic.
* How should it work/What should be fixed?
    * Remove manual salt generation and directly use `bcrypt.hash(password)` for hashing. This leverages the built-in secure salting mechanism of `bcrypt`.