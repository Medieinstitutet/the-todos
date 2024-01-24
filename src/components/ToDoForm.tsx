import { ChangeEvent, FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
interface IToDoFormProps {
  toDoForm: (theNewToDo: string) => void;
  sortToDos: () => void;
}
export const ToDoForm = (props: IToDoFormProps) => {
  const [newToDo, setNewToDo] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.toDoForm(newToDo);
    setNewToDo("");
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewToDo(e.target.value);
  };
  console.log(newToDo);
  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            <h2>My To-Do List</h2>
            <input
              className="form-input"
              type="text"
              placeholder="Add Todo..."
              value={newToDo}
              onChange={handleChange}
            ></input>
          </label>
          <button className="form-submit">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </form>
        <button className="sort-btn" onClick={props.sortToDos}>
          Sort
        </button>
      </div>
    </>
  );
};
