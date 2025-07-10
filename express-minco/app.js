import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
import coreRouter from "./routes/index.js";
import { setupLiveReload } from "./middleware/core/liveReload.js";
import { logRequest } from "./middleware/core/logRequest.js";
import dotenv from "dotenv";
import expressEjsLayouts from "express-ejs-layouts";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

setupLiveReload(app);
console.log("mode: ", app.get("env"));
app.use(logRequest);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// EJS LAYOUTS
app.use((req, res, next) => {
  res.locals.title ??= `${process.env.PROJECT_NAME || "Express Minco"}`;
  next();
});
app.use(expressEjsLayouts);
app.set("layout", "layouts/main");

// ROUTES CONFIGURE
app.use("/", coreRouter);

app.use((req, res, next) => {
  res.locals.env = req.app.get("env");
  next();
});

// Handle well-known paths to suppress unnecessary 404 logs
app.use('/.well-known', (req, res, next) => {
  res.status(204).end();
});


// ERROR HANDLER
app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.env = req.app.get("env");

  res.locals.error = {
    status: err.status,
    stack: req.app.get("env") === "development" ? err.stack : null,
  };

  const statusCode = err.status || 500;
  const url = `\x1b[36m${req.originalUrl}\x1b[0m`;

  console.error(
    `\x1b[37m\x1b[40m${new Date().toISOString()}\x1b[0m \x1b[31m${statusCode} - ${url} \x1b[0m → ${
      err.message
    }`
  );

  res.status(err.status || 500);
  res.render("error");
});

export default app;
