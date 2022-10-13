import React, { useState } from 'react'
import Button from './components/Button '
import Input from './components/Input'
import './App.css'

const App = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const textHandler = (e) => {
    setText(e.target.value);
  }
  const addTodo = () => {
    // console.log(text);

    const node = document.createElement("li");
    const textnode = document.createTextNode(`${text}`);
    node.appendChild(textnode);
    document.getElementById('display').appendChild(node);
    setCount(prev=> prev+1);
    // setText("");
  }
  const clearTodo =()=>{
    // setText("");
    setCount(0);
    document.getElementById('display').innerHTML = '';
  }
  return (
    <div className='app_wrapper'>
      <Input textHandler={textHandler} />
      <Button value="ADD" clickHandler={addTodo} />
      {
        count !==0 && 
        (<Button value="CLEAR TODO" clickHandler={clearTodo}/>)
      }
      <div id='display'>
        <ol>

        </ol>
      </div>
    </div>
  )
}

export default App