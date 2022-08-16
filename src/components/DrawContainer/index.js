import './DrawContainer.css';

function Draw({ clearTable }) {

    return <>
        <div className='winner-container' onClick={clearTable}>
        <h2 className='draw' > DRAW!</h2>
        </div>
    </>
};

export default Draw;