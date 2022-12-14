// Import necessary files and dependencies.
import React from "react";
import "./App.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//   return (
//     <div>Hello</div>
//   );
// }
const Todo = ({ todo, index, markTodo, deleteTodo }) => {
  return (
    // ? : is a ternary operator in JavaScript
    // ? (if) and : (else)
    <div
      className="todo"

    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => deleteTodo(index)}>✕</Button>
      </div>
    </div>
  );
}

/*
We declared FormTodo and passed in the parameter addTodo that will add a new item to the list
*/
const FormTodo = ({ addTodo }) => {
  const [value, setValue] = React.useState("");

  /* Handle Submit is invoked when the form is submitted */
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    // Pass in onSubmit
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type="text" className="input" value={value}
          onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      </Form.Group><br />
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
}

const App = () => {
  /*
   Examples of react hooks
   useState
 
   is a react hook that allows us to add react state to our component.
   what is state?
   is a built in react-object that is used to store or contain data/info
   about our component
   */
  /*
  constants declared to implement useState must have a [] bracket
  objects are created using curly brackets
  */
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sampe todo",
      isDone: false
    }
  ]);

  // To Add Todo
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  // To Mark Todo
  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  // To Delete Todo
  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  deleteTodo={deleteTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;