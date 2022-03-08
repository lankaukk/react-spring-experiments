import React from "react";
import { useTransition, animated } from "react-spring";
// import "./styles.css";

const initialTodos = [
  {
    id: "Buy food",
    task: "Buy food"
  },
  {
    id: "Go home",
    task: "Go home"
  }
];

export default function App() {
  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState(initialTodos);

  const transitions = useTransition(todos, (todo) => todo.id, {
    from: { opacity: 0, height: "0px" },
    enter: { opacity: 1, height: "20px" },
    leave: { opacity: 0, height: "0px" }
  });

  return (
    <div className="App__wrapper">
      <br></br>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTodos([...todos, { id: todo, task: todo }]);
          setTodo("");
        }}
      >
        <input
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <div className="">
          <div className="List">
            {transitions.map(({ item, props, key }) => (
              <animated.div
                key={key}
                style={props}
                onClick={() => {
                  setTodos(todos.filter((i) => i.id !== item.id));
                }}
              >
                {item.task}
              </animated.div>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setTodos([]);
          }}
        >
          RESET
        </button>
      </form>
    </div>
  );
}
