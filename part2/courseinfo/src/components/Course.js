import React from 'react';

const Header = ({ text }) => <h1>{text}</h1>
  
const Total = ({ parts }) => <p>Number of exercises {parts.reduce((a, el) => el.exercises + a, 0) }</p>
  
const Part = ({part}) => <p>{part.name} {part.exercises}</p>    

const Content = ({ parts }) => (
    <div>
        { parts.map((el)=> <Part key={el.id} part={el} />) }
    </div>
    )

function Course({course}) {
    return (
        <div>  
            <Header text={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course