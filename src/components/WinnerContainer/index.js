import { useSelector } from 'react-redux';
import './Winner.css';

function Winner() {
    const { winner } = useSelector(state => state.winner);

    return <>
        <h2 className={`winner ${winner.payload === 'user'} 
        ? "user" : "computer"}`}>{winner.payload === 'user' ? 'X' : 'O'}</h2>
        WINNER!
    </>;
};

export default Winner;