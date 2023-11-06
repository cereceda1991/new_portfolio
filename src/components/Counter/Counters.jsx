import Counter from './Counter';
import './Counters.css';

const Counters = () => {
  return (
    <div className="container_counters">
      <Counter
        initialValue={200}
        incrementValue={5}
        label="Plantillas"
        speed={300}
        concat="+"
      />
      <Counter
        initialValue={80}
        incrementValue={2}
        label="Expertos"
        speed={300}
        concat="+"
      />
    </div>
  );
};

export default Counters;
