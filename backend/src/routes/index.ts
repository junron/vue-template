import express = require("express");
import pretty from "../utils/pretty";
import Users from "../controllers/Users";


const router = express.Router();
router.get("/", (req, res) => {
  res.end("Hello, world");
});

router.get("/api/users", async (req, res) => {
  pretty(req, res, await Users.getUsers());
});

export default router;
