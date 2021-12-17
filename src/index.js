import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Anecdote = ({ content }) => 
  <p>{content}</p>

const Button = ({ handler }) =>
  <button onClick={handler}>Next anecdote</button>

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const nextAnecdote = generateNext(selected);

  return (
    <div>
      <Anecdote content={anecdotes[selected]} />
      <Button handler={() => setSelected(nextAnecdote)} />
    </div>
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

function generateNext(current) {
  let value = generateRandomInt(0, 6);
  while (value === current) {
    value = generateRandomInt(0, 6);
  }
  return value;
}

function generateRandomInt(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

ReactDOM.render(<App anecdotes={anecdotes} />, 
  document.getElementById('root')
);