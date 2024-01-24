// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

import { ToDo } from "../moduls/ToDo";
import { useState } from 'react';

interface IShowToDoProps {
  toDo: ToDo;
  doToDo: (name: string) => void;
  deleteToDo: (name: string) => void;
}

export const ShowToDo = (props: IShowToDoProps) => {
  const [isActive, setIsActive] = useState(props.toDo.isToDoDone);
   
  const handleClick = () => {
    props.doToDo(props.toDo.name);
    setIsActive(!isActive)
  };
  
  const deleteToDo = () => {
    props.deleteToDo(props.toDo.name)
  }

  return (
    <>
     
        <li>
          <div className="li-container">
            <h3 className={isActive ? "toDoDone" : ""}>
              {props.toDo.name}
            </h3>
            <button className={`do-btn ${isActive ? 'active' : ""}`} onClick={handleClick}><FontAwesomeIcon icon={faCheck} /></button>

            <button className ="del-btn" onClick={deleteToDo}><FontAwesomeIcon icon={faTrash} /></button>
          </div>
        </li>
      
    </>
  );
};
