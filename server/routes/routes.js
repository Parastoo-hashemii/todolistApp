const express = require("express");
const {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
} = require("../contoller/ToDoController");

const router = express.Router();
router.get("/", getToDo);
router.post("/save", saveToDo);
router.post("/update", updateToDo);
router.post("/delet", deleteToDo);

module.exports = router;
