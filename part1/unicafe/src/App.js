import { useState } from "react";




function Button(props) {
  return (
      <button onClick={props.onClick}>{props.text}</button>
  )
}

function TrDisplay(props) {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.count}</td>
    </tr>
  )
}

function Statistics({good, neutral, bad}) {
  const all = bad + neutral + good;

  if(all === 0 ){
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <TrDisplay text="good" count={good} />
          <TrDisplay text="neutral" count={neutral} />
          <TrDisplay text="bad" count={bad} />
          <TrDisplay text="all" count={all} />
          <TrDisplay text="average" count={(good-bad)/all} />
          <TrDisplay text="positive" count={(100*good/all)+"%"} />
      </tbody>
      </table>
    </div>
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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

export default App;
