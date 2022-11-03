import React from 'react'
import { TodoContainerStyles } from './ContenedorStyles'

function ContainerTodo({children}) {
  return (
<TodoContainerStyles>{children}</TodoContainerStyles>
  )
}

export default ContainerTodo