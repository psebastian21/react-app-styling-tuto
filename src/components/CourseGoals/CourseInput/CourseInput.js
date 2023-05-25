import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [inputIsValid, setInputIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setInputIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setInputIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };
  //const inputStyle = {borderColor: inputIsValid ? 'black' : 'red', background: inputIsValid ? 'transparent' : 'salmon'}
  //const courseLabelStyle = {color: inputIsValid ? 'black' : 'red'}

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${inputIsValid ? '' : 'invalid'}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
