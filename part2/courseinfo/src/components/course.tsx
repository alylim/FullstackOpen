import React from "react";

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Total = ({ parts }) => {
  const total = parts.reduce((acc, curr) => (acc += curr.exercises), 0);
  return <p style={{ fontWeight: "bold" }}>Total of exercises {total}</p>;
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => {
        const { id, name, exercises } = part;
        return <Part key={id} name={name} exercises={exercises} />;
      })}
    </div>
  );
};

export const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};
