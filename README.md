# The Data Hub

A RESTful API server built with Node.js and Express.js as part of Sprint 09 – Track B (Fullstack Developer).

The project demonstrates backend development concepts including REST architecture, HTTP methods, CRUD operations, custom middleware, in-memory data handling, and API testing with Postman.

---

## 🚀 Project Overview

**The Data Hub** is a backend REST API designed to manage blog posts.

The API allows clients to:

- Create blog posts
- Retrieve all blog posts
- Retrieve a single blog post
- Update existing blog posts
- Delete blog posts
- Perform mock login authentication
- Log incoming HTTP requests through custom middleware

The project uses an **in-memory JavaScript array** instead of a permanent database, as required for Sprint 09.

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- JavaScript
- REST API
- HTTP
- Postman
- Nodemon

---

## 📁 Project Structure

```text
the-data-hub/
│
├── node_modules/
├── .gitignore
├── Prompts.md
├── README.md
├── package.json
├── package-lock.json
└── server.js