
import "./App.css";
import React, { useEffect, useState } from "react";
import { useForm } from "./hooks/useForm";
import { Hello } from "./Hello";

function App() {
  
  const [values,handleChange] = useForm({email:'', password:''});
  const [showHello, setShowHello] = useState(true);

  // useEffect(()=>{
  //   console.log('render')

  //   return ()=>{
  //     console.log('unmount')
  //   }
  // },[]);

  return (
    <div>
      <button onClick={()=> setShowHello(!showHello)}> toggle</button>
      {showHello && <Hello/>}
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
