/** React */
import { useEffect, useMemo, useRef, useState } from "react";

/** Styles */
import style from "./style.module.scss";

const Clock = () => {
    /** Setup */
    const [currentDate, setCurrentDate] = useState(new Date());

    /** Refs */
    const intervalRef = useRef<number>(0);

    /** Data */
    const currentTime = useMemo(
        () =>
            `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
        [currentDate]
    );

    /** Lifecycle */
    useEffect(() => {
        intervalRef.current = setInterval(
            () => setCurrentDate(new Date()),
            1000
        );

        return () => clearInterval(intervalRef.current);
    }, []);

    return <div className={style["clock"]}>{currentTime}</div>;
};

export default Clock;
