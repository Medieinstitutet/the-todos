// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { ToDo } from "../moduls/ToDo";

interface IShowToDoProps {
  toDo: ToDo;
  doToDo: (name: string) => void;
  deleteToDo: (name: string) => void;
}

export const ShowToDo = (props: IShowToDoProps) => {
   
  const handleClick = () => {
    props.doToDo(props.toDo.name);
  };
  
  const deleteToDo = () => {
    props.deleteToDo(props.toDo.name)
  }

  return (
    <>
     
        <li>
          <div className="li-container">
            <h3 className={props.toDo.isToDoDone ? "toDoBtn" : ""}>
              {props.toDo.name}
            </h3>
            <button className="do-btn" onClick={handleClick}>Do it</button>

            <button className ="del-btn" onClick={deleteToDo}>Delete</button>
          </div>
        </li>
      
    </>
  );
};
