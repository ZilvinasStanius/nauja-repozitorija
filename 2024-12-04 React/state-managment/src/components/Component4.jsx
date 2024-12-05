import { useState } from 'react';

export default function Component4() {
  const [color, setColor] = useState('');
  const [textSize, getTextSize] = useState('');
  const [inputText, setInpuText] = useState('');
  const [textFont, setFont] = useState('');
  console.log(color);
  function getFont(e) {
    setFont(e.target.value);
  }

  function getColor(e) {
    setColor(e.target.value);
  }

  function setText(e) {
    setInpuText(e.target.value);
  }

  function getSize(e) {
    getTextSize(e.target.value);
  }

  return (
    <>
      <div className="container mx-auto bg-gray-400 flex items-center justify-center">
        <div className="container flex items-center justify-center">
          <select
            className="mx-3"
            onChange={getColor}
            value={color}
          >
            <option
              value=""
              disabled
            >
              Color
            </option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="pink">Pink</option>
            <option value="orange">Orange</option>
          </select>

          <select
            className="mx-3"
            onChange={getSize}
            value={textSize}
          >
            <option
              value=""
              disabled
            >
              Size
            </option>
            <option value="2rem">Large</option>
            <option value="1rem">Small</option>
            <option value="3rem">Extra Large</option>
            <option value="0.5rem">Extra Small</option>
            <option value="5rem">Huge</option>
          </select>
          <select
            className="mx-3"
            onChange={getFont}
            value={textFont}
          >
            <option
              value=""
              disabled
            >
              Font
            </option>
            <option value="serif">Serif</option>
            <option value="cursive">Cursive</option>
            <option value="fantasy">Fantasy</option>
            <option value="math">Math</option>
            <option value="system-ui">System-ui</option>
          </select>
        </div>

        <input
          className="border-2 border-slate-700 my-10 mx-10"
          type="text"
          onChange={setText}
        />
      </div>
      <div className="container mx-auto text-center">
        {' '}
        <p
          style={{
            color: color,
            fontFamily: textFont,
            fontSize: textSize,
          }}
        >
          {inputText}
        </p>
      </div>
    </>
  );
}
