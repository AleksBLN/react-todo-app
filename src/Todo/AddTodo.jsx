import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classes from './AddTodo.module.css';

function AddTodo({ onCreate }) {
  const [value, setValue] = useState('');

  function submitHandler(event) {
    event.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue('');
    }
  };
  return (
    <form className={classes.margBot1rem} onSubmit={submitHandler}>
      <input value={value} onChange={event => setValue(event.target.value)}/>
      <button type="submit">add</button>
    </form>
  );
};

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
};

export default AddTodo;
