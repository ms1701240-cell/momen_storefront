
import useCount from "../hooks/useCount"


const ComponantC = () => {
     const[count,increment,decrement,reset] =useCount()
  return (
    <div>
  <h2>count:{count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default ComponantC