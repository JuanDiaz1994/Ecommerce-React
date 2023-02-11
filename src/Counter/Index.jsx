import "./Count.css"
import { useState } from "react";
import Button from 'react-bootstrap/Button';




export const Counter = () => {

    const[count,setCount] = useState(0)

    return(
        <>
        <div className="count-container">
        <Button variant="primary" onClick={() => setCount(count -1)}>-</Button>
        <p className="Count0">Cantidad: {count}</p>
        <Button variant="primary" onClick={() => setCount(count +1)}>+</Button>
        </div>
        </>
    )
}

// import { useState, useEffect } from "react";

// export const Counter = () => {  
//     const[count,setCount] = useState(0)

//     useEffect(() =>{

//     },[count])
//     return(
//         <>
//         <p>Numero: {count}</p>
//         <button onClick={() => setCount(count +1)}>+</button>
//         <button onClick={() => setCount(count -1)}>-</button>
//         </>
//     )
// }