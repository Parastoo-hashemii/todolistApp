import axios from "axios";

const url = "http://localhost:5000";
export const getAllToDo = async (setToDo) => {
  await axios.get(url).then((data) => {
    // console.log(data);
    setToDo(data);
  });
};

export const addToDo = (text, settext, setToDo) => {
  axios.post(`${url}/save`, { text }).then((data) => {
    settext("");
    getAllToDo(setToDo);
  });
};

export const updateToDo = (toDoId, text, setToDo, settext, setIsUpdate) => {
  axios
    .post(`${url}/update`, { _id: toDoId, text })
    .then((data) => {
      settext("");
      setIsUpdate(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export const deleteToDo = (_id, setToDo) => {
  axios
    .post(`${url}/delet`, { _id })
    .then((data) => {
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

// export { getAllToDo };
