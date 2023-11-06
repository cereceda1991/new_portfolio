import { useState, useEffect } from 'react';
import './Counter.css';

const Counter = ({ initialValue, incrementValue, label, speed, concat }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < initialValue) {
        setCount(count + incrementValue);
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [count, initialValue, incrementValue, speed]);

  return (
    <div className="counter">
      <h2>
        {count}
        {concat}
      </h2>
      <p>{label}</p>
    </div>
  );
};

export default Counter;
