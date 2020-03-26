import React from 'react'

const Header = ({name}) => {
  return (
      <h2>{name}</h2>
    )
}

const Part = ({name, exercises}) => {
  return (
    <div>{name} {exercises}</div>
  )
}



const Content = ({parts}) => {

  const total = parts.reduce( (accumulator, part) => {
    console.log('what is happening', accumulator, part.exercises)
    return accumulator + part.exercises
    }, 0)

  return (
    <>
      <div>
        {parts.map((part) => 
        <Part key={part.id} name={part.name} exercises={part.exercises} />)}
      </div>
    
      <div>
        {total}
      </div>
    </>
  )
}

const Course = ({ courses }) => {

  return (
    courses.map(course =>
      [
      <Header key={course.id} name={course.name} />,
      <Content key={course.name} parts={course.parts} />
      ]
    )
  )
}

export default Course