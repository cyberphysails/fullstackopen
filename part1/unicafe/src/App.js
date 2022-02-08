import { useState } from "react";




function Button(props) {
  return (
      <button onClick={props.onClick}>{props.text}</button>
  )
}

function Display(props) {
  return (
    <p>{props.text + " " + props.count}</p>
  )
}

function App() {
  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={()=>setGood(good + 1)} text="good"></Button>
      <Button onClick={()=>setNeutral(neutral + 1)} text="neutral"></Button>
      <Button onClick={()=>setBad(bad + 1)} text="bad"></Button>
      <h1>Statistics</h1>
      <Display text="good" count={good} />
      <Display text="neutral" count={neutral} />
      <Display text="bad" count={bad} />
    </div>
  );
}

export default App;
