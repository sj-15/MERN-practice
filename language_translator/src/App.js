// import "bulma/css/bulma.css";
import "./App.css";
import TicketForm from "./components/TicketForm";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <div className="control">
        <h1 className="title">Ticket Form</h1>
        <TicketForm />
      </div>
      <div className="control">
        <h1 className="title">Todo List</h1>
        <Todo />
      </div>
    </div>
  );
}

export default App;
