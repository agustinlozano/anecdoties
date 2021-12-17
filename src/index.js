import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Paragraph = ({ content }) => 
  <p>{content}</p>

const Button = ({ handler, content }) =>
  <button onClick={handler}>{content}</button>

const App = ({ anecdotes }) => {
  const [selectedAnecdote, setSelected] = useState(0);
  const [votes, setVote] = useState(Array(6).fill(0));
  const nextAnecdote = generateNext(selectedAnecdote);
  
  const addVote = () => {
    const newVotes = votes;

    newVotes[selectedAnecdote] += 1;    
    setVote(newVotes);
  }

  return (
    <div>
      <Paragraph content={anecdotes[selectedAnecdote]} />
      <Paragraph content={`has ${votes[selectedAnecdote]} votes`} />
      <Button 
        handler={addVote} 
        content='Vote'
      />
      <Button handler={() => setSelected(nextAnecdote)} 
        content='Next anecdote'
      />
    </div>
  );
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

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>, 
  document.getElementById('root')
);