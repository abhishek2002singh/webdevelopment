import React, { useState } from "react";

function Counters() {
  let [count,setCount]=useState(0);
  //let count=0;

  function updateCount()
  {
   // count++;
   setCount(count+1);
    console.log('count is' , count);
  }
  return (
  <div>
      <p>the value of the count is: {count}</p>
      <button onClick={updateCount} className="ram">increase</button>
    </div>
    );
}

export default Counters;