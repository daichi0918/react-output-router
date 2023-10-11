import React, { useState } from 'react';
import { INIT_TODO_LIST } from '../constants/data';

export const useTodo = () => {
  const [todos, setTodos] = useState(INIT_TODO_LIST);
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchInput(e.target.value);
  const showTodoList = () => {
    return todos.filter((todo: any) => {
      const regexp = new RegExp('^' + searchInput, 'i');
      return todo.title.match(regexp);
    });
  };

  return {
    handleSearchInputChange,
    showTodoList,
    searchInput,
  };
};
