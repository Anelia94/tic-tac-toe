import './GameBoard.css';

function GameBoard({ onHandleClick }) {

    return <table className='table'>
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
    </table>
};

export default GameBoard;