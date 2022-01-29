import React, { useState } from "react";
import "../assets/css/Formulario.css";

const Formulario = () => {
    // Declara una nueva variable de estado, que llamaremos "count".
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
};

export default Formulario;
