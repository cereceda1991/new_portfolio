import Counter from '../Counter/Counter';
import './CounterSection.css';

const CounterSection = () => {
  return (
    <div className="counter__section">
      <Counter
        initialValue={500}
        incrementValue={25}
        label="Horas de teoría"
        speed={300}
        concat="+"
      />
      <Counter
        initialValue={2500}
        incrementValue={100}
        label="Horas de práctica"
        speed={300}
        concat="+"
      />
      <Counter
        initialValue={25}
        incrementValue={1}
        label="Proyectos culminados"
        speed={500}
        concat="+"
      />
      <Counter
        initialValue={100}
        incrementValue={5}
        label="Clientes Satisfechos"
        speed={300}
        concat="%"
      />
    </div>
  );
};

export default CounterSection;
