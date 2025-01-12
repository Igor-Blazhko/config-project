import { useState } from "react";
import "./style.scss"

export const App = () => {
    const [s, ss] = useState(0);
    return (
    <>
        <div>{s}</div>
        <div><button onClick={() => ss(val => val + 1)}>+1</button></div>
    </>);
}
