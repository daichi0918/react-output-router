import { useTodo } from "../../hooks/useTodo";

type Todo = {
  title: string;
  content: string;
}

export const TopTodo = () => {
  const { handleSearchInputChange, showTodoList, searchInput} = useTodo();

  return (
    <div className="container">
      <section className="common">
        <nav>
          <ul>
            <li>
              <a href="/react-output-router">Top</a>
            </li>
            <li>
              <a href="/react-output-router/create">Create</a>
            </li>
          </ul>
        </nav>
      </section>
      <h1>TodoList</h1>
      <section>
        <input type="text" placeholder="Search KeyWord" value={searchInput} onChange={handleSearchInputChange}/>
      </section>
      <section>
        <ul>
          {showTodoList().map((todo: Todo ,index: number) =>(
            <li key={index}>{todo.title}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}