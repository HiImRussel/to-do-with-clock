/** React */
import { Dispatch, ReactNode, createContext, useEffect, useState } from "react";

/** Types */
export type TaskType = {
    id: string;
    taskName: string;
    isCompleted: boolean;
    startDate: string;
    finishDate: string | null;
};

export const TasksContext = createContext<
    [TaskType[], Dispatch<React.SetStateAction<TaskType[]>>]
>([[], (tasksList) => tasksList]);

/** Init */
const tasksFromStorage = localStorage.getItem("tasks");
const initTasksValue = tasksFromStorage ? JSON.parse(tasksFromStorage) : [];

const TasksContextProvider: (props: { children: ReactNode }) => JSX.Element = (
    props
) => {
    /** Props */
    const { children } = props;

    /** Setup */
    const [tasks, setTasks] = useState<TaskType[]>(initTasksValue);

    /** Lifecycle */
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <TasksContext.Provider value={[tasks, setTasks]}>
            {children}
        </TasksContext.Provider>
    );
};

export default TasksContextProvider;
