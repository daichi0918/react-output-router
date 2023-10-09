export const TopTodo = () => {
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
        <input type="text" placeholder="Search KeyWord"/>
      </section>
      <section>
        <ul>
          <li>Todo1</li>
          <li>Todo2</li>
        </ul>
      </section>
    </div>
  )
}