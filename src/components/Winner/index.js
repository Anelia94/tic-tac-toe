import { useSelector, useDispatch } from 'react-redux';
import { resetScore } from '../../redux/counter';
import './Winner.css';

function Winner() {
    const { winner } = useSelector(state => state.winner);
    const dispatch = useDispatch();

    return <div className='winner-container' onClick={() => dispatch(resetScore())}>
        <h2 className={`winner ${winner.payload === 'user'} 
        ? "user" : "computer"}`}>{winner.payload === 'user' ? 'X' : 'O'}</h2>
        WINNER!
    </div>;
};

export default Winner;