import { useEffect, useState } from "react";
import { ToDoForm } from "./ToDoForm";
import { ToDo } from "../moduls/ToDo";
import { ToDos } from "./ToDos";

export const ToDoApp = () => {
 
  const [toDos, setToDos] = useState<ToDo[]>([
    new ToDo("WAKE UP!", false),
    new ToDo("Turn on coffee", false),
    new ToDo("Fry some eggs", false),
    new ToDo("Turn on the computer", false),
  ]);


useEffect (() => {
  localStorage.setItem('toDos', JSON.stringify(toDos));
}, [toDos]);

useEffect (() => {
  const toDos = JSON.parse(localStorage.getItem('toDos'));
  if (toDos) {
    setToDos(toDos)
  }
}, []);

  const handleToDoTask = (name: string): void => {
    setToDos(
      toDos.map((toDo) => {
        if (toDo.name === name) {
          return { ...toDo, isToDoDone: !toDo.isToDoDone };
        } else {
          return toDo;
        }
      })
    );
    
  };
  const addANewToDo = (theNewToDo: string) => {
    setToDos([...toDos, new ToDo(theNewToDo, false)]);
  };
  const handleToDoDelete = (name: string) => {
    setToDos(toDos.filter((toDo) => toDo.name !== name ));
  }
  const handleToDoSort = () => {

    const sortedToDos = [...toDos].sort((a,b) => a.name.localeCompare(b.name));
    setToDos(sortedToDos)
  }

  return (
    <>
      <ToDoForm toDoForm={addANewToDo} sortToDos={handleToDoSort} />
      <ul>
        <ToDos toDos={toDos} doToDo={handleToDoTask} deleteToDo={handleToDoDelete} />
      </ul>
    </>
  );
};
