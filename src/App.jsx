import { useState, useEffect } from 'react';
import anime from 'animejs';
import randomColor from 'randomcolor';

import './App.css';

function App() {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [total, setTotal] = useState(1);
  const [color, setColor] = useState('#ffffff');

  function handleStagger({ target: { id: element } }) {
    const randColor = randomColor();
    setColor(randColor);

    anime({
      targets: '.grid-item',
      backgroundColor: randColor,
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: element
      })
    });
  }

  function setupGrid(hexCode) {
    const columnsNum = Math.floor(document.body.clientWidth / 50);
    const rowsNum = Math.floor(document.body.clientHeight / 50);

    setColumns(columnsNum);
    setRows(rowsNum);
    setTotal(rowsNum * columnsNum);
    setColor(hexCode || '#ffffff');

    anime({
      targets: '.grid-item',
      backgroundColor: hexCode || '#ffffff',
      duration: 0,
      easing: 'linear'
    });
  }

  useEffect(() => setupGrid('#ffffff'), []);
  window.onresize = () => setupGrid(color);

  return (
    <>
      <div id="grid">
        {[...Array(total)].map((...args) => (
          <div
            key={(args[1] + 1).toString()}
            className="grid-item"
            id={args[1]}
            onClick={(event) => handleStagger(event)}
          ></div>
        ))}
      </div>
    </>
  );
}

export default App; // All bugs are not bugs. It's a feature.
