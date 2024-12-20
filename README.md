# Pages
0. http://localhost:8000 --> GET
1. http://localhost:8000/register --> GET and POST
2. http://localhost:8000/login --> GET and POST
3. http://localhost:8000/logout --> GET
4. http://localhost:8000/resources --> GET and POST
5. http://localhost:8000/reservation --> GET and POST
6. http://localhost:8000/resourcesList --> GET
7. http://localhost:8000/terms --> GET
8. http://localhost:8000/privacynotice --> GET
9. http://localhost:8000/account --> GET
10. http://localhost:8000/accountInfo --> GET

> [!NOTE]
> Run the command: deno run --allow-net --allow-env --allow-read --watch app.js

# Logbook

| Date | Number of hours used | Subject(s) | Output
| :--- | :---: | :---: | :---: |
| 30.10.2024 | 2 | Kick-off lecture | Cisco introduction to Cybersecurity
| 1.11.2024 | 2 | Individual | Cisco: Module 2: Attacks, Concepts and Techniques
| 1.11.2024 | 2 | Individual | Cisco: Module 3: Protecting your Data and Privacy
| 1.11.2024 | 2 | Individual | Cisco: Module 4: Protecting the Organization
| 2.11.2024 | 2 | Individual | Cisco: Module 5: Will Your Future Be in Cybersecurity?
| 2.11.2024 | 2 | Individual | Introduction to Cybersecurity: Course Final Exam (passed)
| 4.11.2024 | 2 | Lecture 2 | Introduction to the PortSwigger environment
| 4.11.2024 | 1 | Portswigger | Account made and started on SQL injection lab
| 6.11.2024 | 2 | Open space | Workshop (Labs)
| 8.11.2024 | 3 | Individual work | Portswigger Labs
| 11.11.2024 | 2 | Lecture 3 | Starting the project
| 13.11.2024 | 2 | Open space | Workshop (Labs)
| 15.11.2024 | 3 | Individual work | Portswigger Labs
| 16.11.2024 | 3 | Individual work | Portswigger Labs
| 18.11.2024 | 2 | Lecture 4 | Authentication
| 20.11.2024 | 2 | Individual work | The Booking system project → Phase 1: Step 1
| 21.11.2024 | 3 | Individual work | The Booking system project → Phase 1: Step 2 & 3
| 23.11.2024 | 3 | Individual work | Portswigger Labs
| 25.11.2024 | 2 | Lecture 5 | The project continues
| 25.11.2024 | 3 | Individual work | Portswigger Labs
| 26.11.2024 | 2 | Individual work | The Booking system project → Updating UI on Registration page and testing
| 26.11.2024 | 2 | Individual work | The Booking system project → Updating UI on Registration page and testing
| 27.11.2024 | 2 | Individual work | The Booking system project → Phase 2
| 01.12.2024 | 2 | Individual work | The Booking system project → Phase 2
| 02.12.2024 | 2 | Lecture 6 | The project continues
| 04.12.2024 | 2 | Open space | Workshop
| 08.12.2024 | 4 | Individual work | The Booking system project → Phase 3
| 13.12.2024 | 3 | Individual work | Portswigger Labs
| 14.12.2024 | 6 | Individual work | The Booking system project → Phase 4
| 15.12.2024 | 6 | Individual work | The Booking system project → Final phase


# Here is The Booking system project links:

> [!NOTE]
> Phase 1:
> - Link to report 1: https://github.com/CheersEngineers/Cybersecurity-and-data-privacy-2024-Blended/blob/02fa81c90fd1fe4cadf37b5411b9f9114f8affa1/tests/Registration_page_first_test.md
> - Path Traversal and SQL Injection removed.
> - Link to report 2: https://github.com/CheersEngineers/Cybersecurity-and-data-privacy-2024-Blended/blob/02fa81c90fd1fe4cadf37b5411b9f9114f8affa1/tests/Registration_page_second_test.md
> - User Agent Fuzzer removed.
> - Link to report 3: https://github.com/CheersEngineers/Cybersecurity-and-data-privacy-2024-Blended/blob/02fa81c90fd1fe4cadf37b5411b9f9114f8affa1/tests/Registration_page_third_test.md
> - No more alerts.


> [!NOTE]
> Phase 2:
> - Link to report 1: Create login.html and login.js pages and get them working properly. Attack made by active scan.
> - https://github.com/CheersEngineers/Cybersecurity-and-data-privacy-2024-Blended/blob/b2747c5a6969bcb5b4355d1e33b3a9b639ab44cc/tests/login_page_first_test.md
> - Link to report 2: Adding X-content-Type-Options: nosniff Header. Attack made with active scan and spider attack.
> - https://github.com/CheersEngineers/Cybersecurity-and-data-privacy-2024-Blended/blob/b2747c5a6969bcb5b4355d1e33b3a9b639ab44cc/tests/login_page_second_test.md
> - Link to report 3: Setting a basic CSP Header combined with X-Content-Type. Attack made with active scan and spider attack.
> - https://github.com/CheersEngineers/Cybersecurity-and-data-privacy-2024-Blended/blob/b2747c5a6969bcb5b4355d1e33b3a9b639ab44cc/tests/login_page_third_test.md
> - Link to report 4: Content-Security-Policy Enhancements. Sanitize User Inputs. Error Handling. Serve pages (updated).
> - https://github.com/CheersEngineers/Cybersecurity-and-data-privacy-2024-Blended/blob/b2747c5a6969bcb5b4355d1e33b3a9b639ab44cc/tests/login_page_fourth_test.md

> [!NOTE]
> Phase 3:
> Link to Security Check .MD -report: https://github.com/CheersEngineers/Cybersecurity-and-data-privacy-2024-Blended/blob/bec17cd371b254506208c092c09440dc5aff8d21/tests/security_check.md

> [!NOTE]
> Phase 4:
> Link to final report after fixing String Error (medium risk): https://github.com/CheersEngineers/Cybersecurity-and-data-privacy-2024-Blended/blob/ae528ffe03f35ff50e09a76441b93d99cdbad50d/tests/Report_on_final_phase.md


# Here is a list of completed Labs.

> ### Completed Labs in SQL injection:
> - SQL injection vulnerability in WHERE clause allowing retrieval of hidden data (Apprentice)
> - SQL injection vulnerability allowing login bypass (Apprentice)
> - SQL injection attack, querying the database type and version on MySQL and Microsoft (Practitioner)
> - SQL injection attack, listing the database on non-Oracle databases (Practitioner)
> - SQL injection UNION attack, determining the number of columns returned by the query (Practitioner)
> - SQL injection UNION attack, finding a column containing text (Practitioner)
> - SQL injection UNION attack, retrieving data from other tables (Practitioner)
> - SQL injection UNION attack, retrieving multiple values in a single column (Practitioner)
> - Blind SQL injection with conditional responses (Practitioner)

> ### Completed Labs in Cross-site scripting:
>  - Reflected XSS into HTML context with nothing encoded (Apprentice)
>  - Stored XSS into HTML context with nothing encoded (Apprentice)
>  - Lab: DOM XSS in innerHTML sink using source location.search (Apprentice)

> ### Completed Labs in Authentication:
>  - Username enumeration via different responses (Apprentice)
>  - 2FA simple bypass (Apprentice)
>  - Password reset broken logic (Apprentice)

> ### Completed Labs in Access control vulnerabilities:
>  - Unprotected admin functionality (Apprentice)
>  - Unprotected admin functionality with unpredictable URL (Apprentice)
>  - User role controlled by request parameter (Apprentice)


# Now let's take a look at what was the Pros and Cons while using Portsvigger with Burp Suite Community Edition.

> ### Pros in Portswigger Labs:
>  - I enjoyed to do the tasks and accomplish them. This gives great practical experience on the subjects.
>  - The tasks are very clear, and also the instructions are crystal clear. This makes learning a lot faster and efficient.

> ### Cons in Portswigger Labs:
> - The attacking part of some of the Labs is extremely slow with the Burp Suite Community Edition, and I lack the knowledge to do a script with python for example to do these attacks instead.
