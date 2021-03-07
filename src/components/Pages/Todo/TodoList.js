import { MdDone, MdDelete} from 'react-icons/md';

// ()=>     fat arrow functions  funciones de flecha gorda ;

function TodoListItem({descripcion, id, completed, doneHandler, deleteHandler}){
  const onClick = (e)=>{
    doneHandler(id);
  }
  const onDeleteClick = (e)=>{
    deleteHandler(id);
  }

  const myClass = (completed)?"striked": "";
  return (
    <li className="flex flex-row border-black border-2 text-lg mt-2 mb-2 px-2 bg-green-300 bg-opacity-40 rounded-lg">
    <span className={myClass}>{descripcion}</span>
    <MdDone onClick={onClick}></MdDone>
    <MdDelete onClick={onDeleteClick}></MdDelete>
  </li>);
}

function TodoList({todos, doneHandler, deleteHandler}){
  const todoItems = todos.map((o)=>{
    return (
      <TodoListItem
        key={o.doneHandlerid}
        descripcion={o.description}
        id={o.id}
        completed={o.completed}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
      />
    )
  });
  return (
    <section className=" border-black border-2 px-5">
      <ul>
         {todoItems}
      </ul>
    </section>
  );
}

export default TodoList;
