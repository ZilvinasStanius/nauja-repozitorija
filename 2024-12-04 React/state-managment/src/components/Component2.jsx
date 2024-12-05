import { useState } from 'react';

export default function Component2() {
  const [cat, setCat] = useState('');
  const [weight, setWeight] = useState(0);
  const [catList, setCatList] = useState(() => {
    const savedCats = localStorage.getItem('cats');
    return savedCats ? JSON.parse(savedCats) : [];
  });

  function getCatName(e) {
    setCat(e.target.value);
  }
  function getCatWeight(e) {
    setWeight(e.target.value);
  }

  function addCat(e) {
    e.preventDefault();
    // setCatList([{ name: cat, weight: weight }]);
    setCatList([...catList, { name: cat, weight: weight }]);
  }
  localStorage.setItem('cats', JSON.stringify(catList));
  const sortedCatList = catList.sort((a, b) => a.weight - b.weight);
  const totalCatWeight = catList.reduce(
    (acumulator, cat) => acumulator + Number(cat.weight),
    0
  );
  return (
    <>
      <ul>
        {sortedCatList.map((cat, index) => (
          <li key={index}>
            Name: {cat.name} Cat weight: {cat.weight}
          </li>
        ))}
      </ul>
      <p>Total weight of cats :{totalCatWeight}kg</p>
      <form onSubmit={addCat}>
        <input
          type="text"
          className="border-2 border-slate-700 my-10 mx-10"
          placeholder="Name"
          name="name"
          value={cat}
          onChange={getCatName}
          required
        />

        <input
          type="number"
          className="border-2 border-slate-700 my-10 mx-10"
          min={1}
          max={20}
          placeholder="Weight"
          name="weight"
          value={weight}
          onChange={getCatWeight}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-black px-3 py-2
           mx-4 rounded"
        >
          Add Cat
        </button>
      </form>
    </>
  );
}
