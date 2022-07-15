import React, { createContext, useState } from 'react';

export const CustomContext = createContext();

export const Context = (props) => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Js' },
    { id: 2, title: 'React', important: true },
    { id: 3, title: 'Nodejs' },
  ]);


  const value = {
    todos
  }

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  )
}
