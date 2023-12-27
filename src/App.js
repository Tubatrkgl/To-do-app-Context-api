import './App.css';
import AddTodo from "./components/AddTodo.jsx"
import TodoList from "./components/TodoList.jsx"
import { TodoProvider } from './context/TodoContext.jsx';
function App() {
  return (
    <TodoProvider>   
      <h1 className='app-title'>Todo Application</h1>
    <div className="container">
      <AddTodo />
      <TodoList />
    </div>
    </TodoProvider>
  );
}

export default App;
