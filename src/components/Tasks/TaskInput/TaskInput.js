import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";
import "./TaskInput.css";


const DivControl = styled.div`
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.valid ? 'black' : 'red'}
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => props.valid ? '#ccc' : 'red'};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
  background: ${props => props.valid ? 'tranparent' :  "rgb(197, 151, 151)"}
}

& input:focus {
  outline: none;
  background: #c8e1e4;
  border-color: #00358b;
}
`;


const TaskInput = (props) => {
  const [inputText, setInputText] = useState("");
  const [inputError, setInputError] = useState(true);


  const taskInputChangeHandler = (event) => {
    setInputText(event.target.value);
    setInputError(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
  
    if(inputText.trim().length === 0){
      setInputError(false);
      return ;
    }
    props.onAddTask(inputText);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <DivControl valid={inputError}>
        <label>Задачи</label>
        <input type="text" onChange={taskInputChangeHandler} value={inputText} />
      </DivControl>
      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;
