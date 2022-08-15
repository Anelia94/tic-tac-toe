import React from 'react';
import { useSelector } from 'react-redux';
import './ScoreContainer.css';

function ScoreContainer() {
    const { userPoints } = useSelector(state => state.counter);
    const { computerPoints } = useSelector(state => state.counter);
    return <div className='score-container'>
        <p className='user-score'>X: <strong>{userPoints}</strong></p>
        <p className='computer-score'>O: <strong>{computerPoints}</strong></p>
    </div>;
}

export default ScoreContainer;

