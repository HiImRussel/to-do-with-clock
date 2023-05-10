/** Context */
import { TaskType, TasksContext } from "../../context/TasksContext";

/** Styles */
import style from "./style.module.scss";

/** Types */
import { useContext } from "react";
type TaskPropsType = {
    task: TaskType;
};

const Task = (props: TaskPropsType) => {
    /** Props */
    const { task } = props;

    /** Context */
    const [tasks, setTasks] = useContext(TasksContext);

    /** Handlers */
    const handleFinishTask = () => {
        const date = new Date();
        const modifiedTasks = tasks.map((item) => {
            if (item.id === task.id)
                return {
                    ...task,
                    isCompleted: true,
                    finishDate: `${date.getDay()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
                };

            return item;
        });

        setTasks(modifiedTasks);
    };

    const handleRemove = () => {
        const filteredTasks = tasks.filter((item) => item.id !== task.id);

        setTasks(filteredTasks);
    };

    return (
        <div className={style["task"]}>
            <div>
                <h6 className={style["task__section-title"]}>Name:</h6>
                <p className={style["task__section-value"]}>{task.taskName}</p>
            </div>

            <div>
                <div>
                    <h6 className={style["task__section-title"]}>Start date</h6>
                    <p className={style["task__section-value"]}>
                        {task.startDate}
                    </p>
                </div>
            </div>

            {task.isCompleted && task.finishDate && (
                <div>
                    <h6 className={style["task__section-title"]}>End date</h6>
                    <p className={style["task__section-value"]}>
                        {task.finishDate}
                    </p>
                </div>
            )}

            <div className={style["task__buttons"]}>
                {!task.isCompleted && (
                    <button
                        onClick={handleFinishTask}
                        className={style["task__button"]}
                    >
                        Finish
                    </button>
                )}
                <button
                    onClick={handleRemove}
                    className={`${style["task__button"]} ${style["task__button--remove"]}`}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default Task;
