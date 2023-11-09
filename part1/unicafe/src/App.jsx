import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const renderButtonList = [
    { label: "good", onClick: setGood },
    { label: "neutral", onClick: setNeutral },
    { label: "bad", onClick: setBad },
  ];

  return (
    <>
      <h1>give feedback</h1>
      <span>
        {renderButtonList.map((buttonProp, idx) => (
          <Button
            key={idx}
            onClick={buttonProp.onClick}
            label={buttonProp.label}
          />
        ))}
      </span>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  );
}

export default App;

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  if (total === 0) return <p>No feedback given</p>;

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={(good - bad) / total} />
        <StatisticLine text="positive" value={good / total} />
      </tbody>
    </table>
  );
};

const Button = ({ onClick, label }) => {
  function handleClick() {
    onClick((count) => count + 1);
  }

  return <button onClick={handleClick}>{label}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
