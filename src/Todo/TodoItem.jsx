import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Context from '../context';
import classes from './TodoItem.module.css';

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const spanClass = cn({
    done: todo.completed,
  });
  return (
    <li className={classes.li}>
      <span className={classes[spanClass]}>
        <input
          className={classes.input}
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button onClick={() => removeTodo(todo.id)} className={classes.removeBtn}>&times;</button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default TodoItem;
