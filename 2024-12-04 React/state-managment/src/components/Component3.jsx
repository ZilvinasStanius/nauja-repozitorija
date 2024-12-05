import { useState } from 'react';

export default function Component3() {
  const [firstInput, setFirstInput] = useState(100);
  const [secondInput, setSecondInput] = useState(50);

  function getFirstInputValue(e) {
    setFirstInput(e.target.value);
    setSecondInput(e.target.value / 2);
  }

  function getSecondInputValue(e) {
    setSecondInput(e.target.value);
    setFirstInput(e.target.value * 2);
  }

  return (
    <div className="container mx-auto bg-gray-400 flex items-center justify-center">
      <input
        className="border-2 border-slate-700 my-10 mx-10"
        type="number"
        value={firstInput}
        onChange={getFirstInputValue}
      />
      <input
        className="border-2 border-slate-700 my-10 mx-10"
        type="number"
        value={secondInput}
        onChange={getSecondInputValue}
      />
    </div>
  );
}
