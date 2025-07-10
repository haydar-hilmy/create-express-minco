import express from "express";
import { DocsController, helloController, HomeController } from "../controllers/indexController.js";
import { title } from "process";
const router = express.Router();

/* GET home page. */
router.get("/", HomeController);

router.get("/docs", DocsController)

router.get("/hello", helloController);

export default router;
