/** Components */
import Clock from "./components/Clock/Clock";
import NewTaskInput from "./components/NewTaskInput/NewTaskInput";
import TasksList from "./components/TasksList/TasksList";

function App() {
    return (
        <div className="app-container">
            <Clock />
            <NewTaskInput />

            <div className="tasks-wrapper">
                <TasksList mode="new" />
                <TasksList mode="completed" />
            </div>
        </div>
    );
}

export default App;
