
// Import necessary files and dependencies.
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import { Card} from 'react-bootstrap'
import Todo from './components/Todo';
import FormTodo from './components/FormTodo';
import Navigation from './components/Navigation';
import Main from './pages/Main';


// function App() {
//   return (
//     <div>
//       Hello
//     </div>
//   );
// }
/* const Todo = ({ todo, index, markTodo, deleteTodo}) => {
  return (
    // ? : is a ternary operator in JavaScript
    // ? (if) and : (else)
    <div className='todo'>
    <span style={{textDecoration: todo.isDone ? "line-through" :"" }}>{todo.text}</span>
    <div>
      <Button variant='outline-success' onClick={() => markTodo(index)}></Button>
      <Button variant='outline-warning' onClick={() => deleteTodo(index)}></Button>

    </div>
    </div>
  );
}
/*
We declared FormTodo and passed in the parameter addTodo that will add a new item to the list
*/
/*
<>

<FormTodo />
<Todo/>
</>
*/
const App = () => {
  /*
  Example of react hooks
  useState

  is a react hook that allows us to add react state to our component.
  what is state?
  is a built in react-object that is used to store or contain data/info
  about our component

  constants declared to implement useState must have a [] bracket
  objects are created using curly brackets
  methods, functions, objects and constants are passed into a function within {} barckets
  */
 /* const [todos, setTodos] = React.useState([
    {text: "This is a sample", isDone: false }
  ]);

 
    const addTodo = text => {
      const newTodos = [...todos, {text}];
      setTodos(newTodos)
    };
    // To mark todo
    const markTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isDone = true;
      setTodos(newTodos);
    };
    /// To delete todo
    const deleteTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };
*/
    return(
    <Main />
    );
  
}
export default App;
