# 📄 Documentation

## 📦 Installation

To install the template, run the following command:

```bash
npx create-express-minco my-app
```

---

## 🗂 Folder Structure

This template follows MVC structure like Laravel or CodeIgniter:

```text
├── bin/
├── config/
├── controllers/
├── middleware/
├── models/
├── public/
├── routes/
└── views/
```

---

## 📘 Example Route

Define routes using the MVC approach:

```js
// routes/index.js
router.get('/', HomeController);
```

---

## 🧠 Controller Usage

Controllers are functions that handle request logic and response rendering. You can define them in the `controllers/` directory.

```js
// controllers/indexController.js
export const HomeController = (req, res) => {
  res.render("home", {
    title: "Express Minco",
    layout: false,
  });
};
```

---

## 🚦 Route Configuration

Routes define the URL paths and connect them to controllers. Routes are registered in the `routes/` folder and loaded in `app.js`.

```js
// routes/index.js
import express from "express";
import { HomeController } from "../controllers/indexController.js";
const router = express.Router();

router.get("/", HomeController);

export default router;
```

---

## 🧩 Layout Integration

Layouts help you reuse a common structure across multiple pages. Layout support is configured using `express-ejs-layouts`.

```js
// app.js
app.use(expressEjsLayouts);
app.set("layout", "layouts/main");
```

```html
<!-- views/layouts/main.ejs -->
<body>
  <%- include('../partials/header') %>
  <main><%- body %></main>
  <%- include('../partials/footer') %>
</body>
```

---

## 🔗 Partials (Header & Footer)

Partials are reusable UI components. They're included in the main layout to maintain consistency across pages.

```html
<!-- views/partials/header.ejs -->
<header class="py-4 px-6 bg-gray-800 text-white text-xl font-bold">
  Express Minco 🚀
</header>
```

```html
<!-- views/partials/footer.ejs -->
<footer class="py-4 px-6 bg-gray-800 text-gray-400 text-sm text-center">
  &copy; 2025 Express Minco. All rights reserved.
</footer>
```

---

## ⚙️ Configuration

You can configure environment, port, and more using the `.env` file:

```env
# App Config
PROJECT_NAME="Express MVC"
PORT=3000
# development / production
NODE_ENV=development

# API Config
API_BASE_URL=""
API_KEY=""

# DB Config
DB_HOST=""
DB_PORT=3306
DB_USER="root"
DB_PASS=""
DB_NAME=""
```
