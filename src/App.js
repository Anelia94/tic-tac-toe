import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { increaseUserScore, increaseComputerScore, resetScore } from './redux/counter';
import ScoreContainer from './components/ScoreContainer';

function App() {
  const [userCells, setUserCells] = useState([]);
  const [computerCells, setComputerCells] = useState([]);
  const [emptyCells, setEmptyCells] = useState(['a0', 'a1', 'a2', 'b0', 'b1', 'b2', 'c0', 'c1', 'c2']);
  const [allCells, setAllCells] = useState();
  const [winner, setWinner] = useState('');
  const [draw, setDraw] = useState(false);

  const dispatch = useDispatch();

  const hasWinner = (cells, type) => {
    const firstRow = cells.filter(c => c[0] === 'a');
    const secondRow = cells.filter(c => c[0] === 'b');
    const thirdRow = cells.filter(c => c[0] === 'c');

    const firstCol = cells.filter(c => c[1] === '0');
    const secondCol = cells.filter(c => c[1] === '1');
    const thirdCol = cells.filter(c => c[1] === '2');

    const leftDiagonal = cells.includes('a0') && cells.includes('b1') && cells.includes('c2');
    const rightDiagonal = cells.includes('c0') && cells.includes('b1') && cells.includes('a2');

    if (firstRow.length === 3
      || secondRow.length === 3
      || thirdRow.length === 3
      || firstCol.length === 3
      || secondCol.length === 3
      || thirdCol.length === 3
      || leftDiagonal
      || rightDiagonal) {
      type === 'X' ?
        dispatch(increaseUserScore()) : dispatch(increaseComputerScore());
      setWinner(type);
    }
  }


  const userTurn = (clickedCell, cells) => {
    userCells.push(clickedCell);
    emptyCells.splice(emptyCells.findIndex(c => c === clickedCell), 1);
    hasWinner(userCells, 'X');
    renderTable(cells, 'user');
  }

  const computerTurn = (cells) => {
    if (emptyCells.length > 0 && !winner) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const randomCell = emptyCells[randomIndex];
      computerCells.push(randomCell);
      emptyCells.splice(randomIndex, 1);
      hasWinner(computerCells, 'O');
      renderTable(cells, 'computer');
    }
  }

  const renderTable = (cells, type) => {
    if (type === 'user') {
      for (var i = 0; i < cells.length; i++) {
        if (userCells.includes(cells[i].id)) {
          cells[i].innerText = 'X';
          cells[i].classList.add('user');
        }
      }
    } else if (type === 'computer') {
      for (var k = 0; k < cells.length; k++) {
        if (computerCells.includes(cells[k].id)) {
          cells[k].innerText = 'O';
          cells[k].classList.add('computer');
        }
      }
    } else if (type === 'clear') {
      for (var m = 0; m < cells.length; m++) {
        cells[m].innerText = '';
        cells[m].classList.remove('computer');
        cells[m].classList.remove('user');
      }
    }
  }

  const restartGame = () => {
    dispatch(resetScore());
    clearTable();
  }

  const clearTable = () => {
    if (emptyCells.length < 9) {
      renderTable(allCells, 'clear');
      setWinner('');
      setDraw(false);
      setUserCells([]);
      setComputerCells([]);
      setEmptyCells(['a0', 'a1', 'a2', 'b0', 'b1', 'b2', 'c0', 'c1', 'c2']);
    }
  }

  const onHandleClick = (event) => {
    const clickedCell = event.target.id;

    const cells = event.target.parentNode.parentNode.getElementsByTagName('td');

    if (event.target.tagName === 'TD'
      && !userCells.includes(clickedCell)
      && !computerCells.includes(clickedCell)) {
      setAllCells(cells);
      userTurn(clickedCell, cells);

      computerTurn(cells);
    }

    if (emptyCells.length === 0 && !winner) {
      setDraw(true);
    }
  }
  return (
    <div className='app'>
      <ScoreContainer></ScoreContainer>
      <div className='table-container'>
        {draw &&
          <div className='winner-container' onClick={clearTable} >
            <h2 className='draw' > DRAW!</h2>
          </div>
        }
        {winner &&
          <div className='winner-container' onClick={clearTable}>
            <h2 className={`winner ${winner === 'user'} ? "user" : "computer"}`}> {winner}</h2>
            WINNER!
          </div>}
        {(!winner && !draw) &&
          <table className='table'>
            <tbody onClick={onHandleClick}>
              <tr>
                <td id='a0' className='bottom right'> </td>
                <td id='a1' className='bottom right'> </td>
                <td id='a2' className='bottom'> </td>
              </tr>
              <tr>
                <td id='b0' className='bottom right'> </td>
                <td id='b1' className='bottom right'> </td>
                <td id='b2' className='bottom'> </td>
              </tr>
              <tr>
                <td id='c0' className='right'> </td>
                <td id='c1' className='right'> </td>
                <td id='c2'> </td>
              </tr>
            </tbody>
          </table>}
      </div >
      <button
        className='restart-button'
        onClick={restartGame} >Restart game</button>
    </div>
  );
}

export default App;
