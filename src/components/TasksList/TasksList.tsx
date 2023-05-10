/** React */
import { useContext, useMemo } from "react";

/** ClassNames */
import classNames from "classnames";

/** Context */
import { TasksContext } from "../../context/TasksContext";

/** Styles */
import style from "./style.module.scss";

/** Components */
import Task from "../Task/Task";

/** Types */
type TasksListPropsType = {
    mode: "completed" | "new";
};

const TasksList = (props: TasksListPropsType) => {
    /** Props */
    const { mode } = props;

    /** Context */
    const [tasks] = useContext(TasksContext);

    /** Data */
    const filteredTasks = useMemo(
        () =>
            tasks.filter((task) => {
                if (mode === "completed") return task.isCompleted;

                return !task.isCompleted;
            }),
        [tasks, mode]
    );

    return (
        <div
            className={`${style["tasks-list"]} ${
                mode === "completed" ? style["tasks-list--completed"] : ""
            }`}
        >
            <h3 className={style["tasks-list__title"]}>
                {mode === "new" ? "New tasks" : "Completed tasks"}
            </h3>
            {filteredTasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TasksList;
