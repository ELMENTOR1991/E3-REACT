import React from 'react'
import Wrapper from "../../components/GeneralWrapper/Wrapper";
import ContainerTodo from "../../components/ContenedorTar/ContenedorTarea";
import FormTodo from "../../components/FormTodo/FormTodo";
import ContainerTasks from "../../components/contenedorTarea/ContenedorTarea";
import { useSelector } from "react-redux";

const Todo = () => {
  //redux
    const state = useSelector((state) => state.todo);
    localStorage.setItem("tasks", JSON.stringify(state));
  return (
       <Wrapper >
        <ContainerTodo>
          <FormTodo tasks={state}></FormTodo>
          <ContainerTasks tasks={state}></ContainerTasks>
        </ContainerTodo>
      </Wrapper> 
  )
}

export default Todo