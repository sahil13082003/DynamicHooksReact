import './bgChnager.css';
import { useState } from 'react';

function BgChanger() {
    const [color, setColor] = useState('white'); // Default background color

    return (
        <div
            style={{
                backgroundColor: color,
                minHeight: '100vh',
                transition: 'background-color 0.3s ease-in-out',
            }}
        >
            <div className="navbar1">
                <h1>Background Changer</h1>
                <div className="button-group">
                    <button className="color-button red" onClick={() => setColor('red')}>Red</button>
                    <button className="color-button green" onClick={() => setColor('green')}>Green</button>
                    <button className="color-button blue" onClick={() => setColor('blue')}>Blue</button>
                    <button className="color-button yellow" onClick={() => setColor('yellow')}>Yellow</button>
                    <button className="color-button purple" onClick={() => setColor('purple')}>purple</button>
                    <button className="color-button gray" onClick={() => setColor('gray')}>gray</button>
                </div>
            </div>
        </div>
    );
}

export default BgChanger;
