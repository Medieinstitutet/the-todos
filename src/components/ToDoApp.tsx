import { useState } from "react";
import { ToDoForm } from "./ToDoForm";
import { ToDo } from "../moduls/ToDo";
import { ToDos } from "./ToDos";

export const ToDoApp = () => {
  const [toDos, setToDos] = useState<ToDo[]>(
    JSON.parse(
      localStorage.getItem("toDos") ||
        JSON.stringify([
          new ToDo("WAKE UP!", false),
          new ToDo("Turn on coffee", false),
          new ToDo("Fry some eggs", false),
          new ToDo("Turn on the computer", false),
        ])
    )
  );

  const handleToDoTask = (name: string): void => {
    const updatedToDos = toDos.map((toDo) => {
      if (toDo.name === name) {
        return { ...toDo, isToDoDone: !toDo.isToDoDone };
      } else {
        return toDo;
      }
    });

    setToDos(updatedToDos);

    localStorage.setItem("toDos", JSON.stringify(updatedToDos));
  };
  const addANewToDo = (theNewToDo: string) => {
    const newToDo = [...toDos, new ToDo(theNewToDo, false)];
    setToDos(newToDo);
    localStorage.setItem("toDos", JSON.stringify(newToDo));
  };
  const handleToDoDelete = (name: string) => {
    const filteredToDos = toDos.filter((toDo) => toDo.name !== name);
    setToDos(filteredToDos);
    localStorage.setItem("toDos", JSON.stringify(filteredToDos));
  };
  const handleToDoSort = () => {
    const sortedToDos = [...toDos].sort((a, b) => {
      if (a.isToDoDone === b.isToDoDone) {
        return a.name.localeCompare(b.name);
      }
      return Number(a.isToDoDone) - Number(b.isToDoDone);
    })
    setToDos(sortedToDos);
    localStorage.setItem("toDos", JSON.stringify(sortedToDos));
  };

  return (
    <>
      <ToDoForm toDoForm={addANewToDo} sortToDos={handleToDoSort} />
      <ul>
        <ToDos
          toDos={toDos}
          doToDo={handleToDoTask}
          deleteToDo={handleToDoDelete}
        />
      </ul>
    </>
  );
};
