import { useSelector } from 'react-redux';
import './Winner.css';

function Winner({ clearTable }) {
    const { winner } = useSelector(state => state.winner);

    return <>
        <div className='winner-container' onClick={clearTable}>
            <h2 className='h2-winner'>{winner.payload === 'user' ? 'X' : 'O'}</h2>
            WINNER!
        </div>
    </>
};

export default Winner;