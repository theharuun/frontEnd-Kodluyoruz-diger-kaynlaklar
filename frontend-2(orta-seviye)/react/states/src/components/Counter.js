import {useState} from 'react'

function Counter() {
    const [count,setCount]=useState(5);

    const increase=()=>setCount(count + 1);
    const decrease=()=>setCount(count - 1);


    
  return (
    <>
        <div>Counter</div>
        <h2>{count}</h2>
        <button onClick={decrease}>decrease</button>
        <button onClick={increase}>increase</button>
    </>
  )
}

export default Counter