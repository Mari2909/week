import React, { useState } from "react";

export default function Counter(props) {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(({ count }) => ({
            count: count + 1
        }));
    };

    return <button onClick={handleClick}>{count}</button>;
}