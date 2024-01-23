import { ToDo } from "../moduls/ToDo";
import { ShowToDo } from "./ShowToDo";

interface IToDosProps {
  toDos: ToDo[];
  doToDo: (name: string) => void;
  deleteToDo: (name: string) => void;
}

export const ToDos = (props: IToDosProps) => {
  return (
    <>
      {props.toDos.map((toDo) => {
        return (
          <ShowToDo
            toDo={toDo}
            doToDo={props.doToDo}
            deleteToDo={props.deleteToDo}
            key={toDo.name}
          />
        );
      })}
    </>
  );
};
