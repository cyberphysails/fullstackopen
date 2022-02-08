import React from 'react'

const Header = (props) => {
  return <h1>{props.head}</h1>
}

const Content = (props) => {
  const data = props.data.map((el, index)=> {
    return <p key={el.title} >{el.title + " " + el.count}</p>
  })
  return data
}


const Total = (props) => {
  const total = props.data.reduce((init, el)=> init = el.count + init, 0);
  return <p>Number of exercises {total}</p>
}


const App = () => {
  const course = 'Half Stack application development'
  const data = [
    { title: "Fundamentals of React", count: 10 },
    { title: "Using props to pass data", count: 7 },
    { title: "State of a component", count: 14 },
  ]

  return (
    <div>
      <Header head={course} />
      <Content data={data} />
      <Total data={data} />
    </div>
  )
}

export default App
