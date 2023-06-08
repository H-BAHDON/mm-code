import React, { useEffect, useState } from 'react';
import "./contribution.css"
export default function Contribution() {
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    const generateSquares = () => {
      const squares = [];
      for (let i = 1; i < 365; i++) {
        const level = Math.floor(Math.random() * 3);
        squares.push(<li key={i} data-level={level}></li>);
      }
      setSquares(squares);
    };

    generateSquares();
  }, []);

  return (
    <>
      <div className="graph">
        <ul className="months">
          <li>Jan</li>
          <li>Feb</li>
          <li>Mar</li>
          <li>Apr</li>
          <li>May</li>
          <li>Jun</li>
          <li>Jul</li>
          <li>Aug</li>
          <li>Sep</li>
          <li>Oct</li>
          <li>Nov</li>
          <li>Dec</li>
        </ul>
        <ul className="days">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="squares">{squares}</ul>
      </div>
    </>
  );
}
