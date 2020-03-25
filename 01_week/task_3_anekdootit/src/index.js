import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

// This function returns a number that does not equal to the current number
const randomNumber = (current, lenght) => {
  let random
  do {
    random = Math.floor(Math.random() * lenght)
    console.log("Previous: ", current, "New (RNG): ", random)
  }
  while (random === current)
  
  return (
    random
  )
}


// This function increases the current index's value with +1
const increasePoints = (index, points) => {
  const copy = [...points]
  copy[index] += 1 
  return (
    copy
  )
}


const PrintHighScore = ({list, anecdotes}) => {
  const maxVal = Math.max(...list)
  if (maxVal === 0) {
    return (
      <div>
        No votes given.
      </div>
    )
  }
  
  // NOTE: This does not handle a tie situation.
  const indexMax = list.indexOf(maxVal)

  return (
  <div>
    <p>{anecdotes[indexMax]}</p>
    Has points: {maxVal}
  </div>)
}


const App = (props) => {
  const [selected, setSelected] = useState(null)
  const [points, setPoints] = useState([...props.points])
    
  // Handlers
  const handleVoteClick = () => {
    setPoints(increasePoints(selected, points))
    }
  const handleNextClick = () => {
    const rngIndex = randomNumber(selected, props.anecdotes.length)
    setSelected(rngIndex)
  }

    // This makes sure that the first quotes is randomized
    if (selected === null) {
      handleNextClick()
    }

  return (
    <main>
      <h1>Anecdote of the day</h1>
      <div>
        {props.anecdotes[selected]}
      </div>
      
      <div>
        Has points {points[selected]}
      </div>
      
      <div>
      <Button onClick={handleVoteClick} text='Vote' />
      <Button onClick={handleNextClick} text='Next anecdote' />
      </div>

      <h1>Anecdote with most votes</h1>
      <PrintHighScore list={points} anecdotes={props.anecdotes} />
    </main>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const points = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0)

ReactDOM.render(
  <App anecdotes={anecdotes} points={points} />,
  document.getElementById('root')
)