import { useState } from 'react';

function Lista() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    if (text !== '') {
      setList(list.concat(text));
      setText('');
    }
  };

  return (
    <div className="App">
      {list.length}
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search..."
        value={text}
      />
      <button onClick={handleClick}>Agregar</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;
