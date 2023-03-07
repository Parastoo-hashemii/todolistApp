const toDoModel = require("../models/ToDoModel");
module.exports.getToDo = async (req, res) => {
  const ToDo = await toDoModel.find();
  res.send(ToDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  toDoModel.create({ text }).then((data) => {
    console.log("Added seccessfullly");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  toDoModel
    .findByIdAndUpdate(_id, { text })
    .then(() => res.send("update seccessfully"))
    .catch((err) => {
      console.log(err);
    });
};
module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  toDoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("delete seccessfully"))
    .catch((err) => {
      console.log(err);
    });
};
