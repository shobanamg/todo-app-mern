import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { TodoContextProvider } from "./context/TodoContext";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="max-w-lg mx-auto py-8 my-10 ">
      <Header />
      <TodoContextProvider>
        <AddTodo />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
