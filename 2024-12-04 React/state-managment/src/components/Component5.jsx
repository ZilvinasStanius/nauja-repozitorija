import { useState } from 'react';

export default function Component5() {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [color, setColor] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  function getHeight(e) {
    setHeight(e.target.value);
  }

  function getWidth(e) {
    setWidth(e.target.value);
  }

  function getColor(e) {
    setColor(e.target.value);
  }

  function createBox() {
    setWidth(100);
    setHeight(100);
    setColor('#000000');
    setIsSaved(false);
  }

  function saveBox() {
    setIsSaved(true);
  }

  return (
    <>
      <div className="container mx-auto bg-fuchsia-200">
        <input
          type="range"
          min={10}
          max={200}
          onChange={getHeight}
          value={height}
          disabled={isSaved}
        />
        <input
          type="range"
          min={10}
          max={200}
          onChange={getWidth}
          value={width}
          disabled={isSaved}
        />
        <input
          type="color"
          value={color}
          onChange={getColor}
          disabled={isSaved}
        />

        <button
          onClick={createBox}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sukurti
        </button>
        <button
          onClick={saveBox}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Išsaugoti
        </button>
      </div>
      <div
        style={{
          background: color,
          width: `${width}px`,
          height: `${height}px`,
        }}
      ></div>
    </>
  );
}
