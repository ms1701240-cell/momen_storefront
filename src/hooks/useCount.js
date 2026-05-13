import { useState } from "react"


const useCount = () => {
     const [count,setcount] =useState(0)
     const increment= ()=>setcount((prev)>=prev+1);
     const decrement = ()=> setcount((prev)>=prev-1);
     const reset =()=> setcount(0);
  return (
    [count,increment,decrement,reset]
  )
}

export default useCount