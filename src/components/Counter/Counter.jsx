import { useState, useEffect } from 'react';
import './Counter.css';
import { CounterPropTypes } from '../../utils/prop-types';

const Counter = ({ initialValue, incrementValue, label, speed, concat }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < initialValue) {
        setCount((prevCount) => prevCount + incrementValue);
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [count, initialValue, incrementValue, speed]);

  const handleMouseEnter = () => {
    setCount(0); // Reinicia el contador al hacer hover
  };

  return (
    <div className="counter" onMouseEnter={handleMouseEnter}>
      <h2>
        {count}
        {concat}
      </h2>
      <p>{label}</p>
    </div>
  );
};

Counter.propTypes = CounterPropTypes;

export default Counter;
