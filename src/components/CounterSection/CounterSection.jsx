import Counter from '../Counter/Counter';
import './CounterSection.css';

// eslint-disable-next-line react/prop-types
const CounterSection = ({ counterData }) => {
  return (
    <div className="counter__section">
      {Object.values(counterData).map((counter) => (
        <Counter key={counter.id} {...counter} />
      ))}
    </div>
  );
};

export default CounterSection;
