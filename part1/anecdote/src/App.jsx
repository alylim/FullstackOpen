import { useState } from "react";

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  "The only way to go fast, is to go well.",
];

function App() {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  const [mostVoted, setMostVoted] = useState(null);

  function handleClick() {
    const newAnecdote = Math.floor(Math.random() * anecdotes.length);
    if (newAnecdote === selected) {
      handleClick();
    }
    setSelected(newAnecdote);
  }

  function handleVote() {
    const copy = points.map((value, idx) =>
      idx === selected ? value + 1 : value
    );
    setPoints(copy);

    if (mostVoted === null) {
      setMostVoted(selected);
    } else {
      const newMostVoted = copy.reduce(
        (highest, curr, idx) => {
          return curr > highest.votes ? { votes: curr, index: idx } : highest;
        },
        { votes: 0, index: 0 }
      );
      setMostVoted(newMostVoted.index);
    }
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <span>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleClick}>next anecdote</button>
      </span>

      <h1>Anecdote with the most votes</h1>
      <div>{anecdotes[mostVoted]}</div>
    </>
  );
}

export default App;
