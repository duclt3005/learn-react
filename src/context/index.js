import { useStore, actions } from "./store";

const Context = () => {
    const [state, dispatch] = useStore();
    const {todos, todoInput} = state;

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput));
    }

    return (
        <div>
            <input
                value={todoInput}
                placeholder='Enter ...'
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value));
                }}
            />

            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((e, i) => (
                    <li key={i}>{e}</li>
                ))}
            </ul>
        </div>
    )
}

export default Context