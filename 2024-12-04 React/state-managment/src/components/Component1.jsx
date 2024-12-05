import { useState } from 'react';

export default function Component1() {
  const [squere, setSquere] = useState([]);
  const [numberOfSqueres, setNumberOfSqueres] = useState();

  console.log(squere);

  function howManySqueres(e) {
    setNumberOfSqueres(e.target.value);
  }
  function addSqueres() {
    const randomNumbers = Array.from(
      { length: Number(numberOfSqueres) },
      (number) => (number = (Math.random() * (200 - 100) + 100).toFixed(0))
    );
    setSquere([...randomNumbers, ...squere]);
  }

  return (
    <>
      {squere.map((sqr) => (
        <div className="bg-red-700 h-10 w-14 inline-block text-center border border-black ">
          {sqr}
        </div>
      ))}

      <input
        type="number"
        className="border-2 border-slate-700 my-10 mx-10"
        onChange={howManySqueres}
        min={1}
        max={200}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-black px-3 py-2
       mx-4 rounded"
        onClick={addSqueres}
      >
        Add squere
      </button>
    </>
  );
}
