import { useState } from 'react';
import './IncDecCount.css'; // Import the CSS file

function IncDecCount() {
    const [count, setCount] = useState(0);

    function IncrementCount() {
        if (count >= 20) {
            alert("Count cannot exceed 20");
        } else {
            setCount(prevCount => prevCount + 1);
        }
    }

    function DecrementCount() {
        if (count <= 0) {
            alert("Count cannot go below 0");
        } else {
            setCount(prevCount => prevCount - 1);
        }
    }

    return (
        <div className="counter-container">
            <h3>Increase and Decrease the Count</h3>
            <p className="count-display">Count: {count}</p>
            <div className="button-group">
                <button className="counter-button increment" onClick={IncrementCount}>
                    Increase
                </button>
                <button className="counter-button decrement" onClick={DecrementCount}>
                    Decrease
                </button>
            </div>
        </div>
    );
}

export default IncDecCount;
