/** React */
import { useContext, useState } from "react";

/** UUID */
import { v4 as uuidv4 } from "uuid";

/** Context */
/** Context */
import { TasksContext } from "../../context/TasksContext";

/** Styles */
import style from "./style.module.scss";

const NewTaskInput = () => {
    /** Setup */
    const [inputValue, setInputValue] = useState("");

    /** Context */
    const [tasks, setTasks] = useContext(TasksContext);

    /** Handlers */
    const handleAddNew = () => {
        const date = new Date();
        const newTask = {
            id: uuidv4(),
            taskName: inputValue,
            isCompleted: false,
            startDate: `${date.getDay()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
            finishDate: null,
        };

        setTasks([...tasks, newTask]);

        setInputValue("");
    };

    return (
        <div className={style["new-task-input"]}>
            <input
                type="text"
                className={style["new-task-input__input"]}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                className={style["new-task-input__button"]}
                onClick={handleAddNew}
            >
                +
            </button>
        </div>
    );
};

export default NewTaskInput;
