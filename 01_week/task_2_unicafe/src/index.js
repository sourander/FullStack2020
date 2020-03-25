import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  
  const good = props.values[0]
  const neut = props.values[1]
  const poor = props.values[2]

  const total = good + neut + poor
  const average = (total / 3).toFixed(2)
  const positive = (good / total * 100).toFixed(1)

    if (total === 0) {
      return (
        <div>
          Please give feedback by pressing the buttons above. :)
        </div>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value ={good} />
        <StatisticLine text="Neutral" value ={neut} />
        <StatisticLine text="Bad" value ={poor} />
        <StatisticLine text="All" value ={total} />
        <StatisticLine text="Average" value ={average} />
        <StatisticLine text="Positive" value ={positive + " %"} />
      </tbody>
    </table>
  )
}

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neut, setNeut] = useState(0)
  const [poor, setPoor] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutClick = () => setNeut(neut + 1)
  const handlePoorClick = () => setPoor(poor + 1)

  return (

    <div>
      <h1>Give feedback, please.</h1>
      <div>
        <Button onClick={handleGoodClick} text='good' />
        <Button onClick={handleNeutClick} text='neutral' />
        <Button onClick={handlePoorClick} text='bad' />
      </div>

      <h2>statistics</h2>
      <Statistics values={[good, neut, poor]}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)