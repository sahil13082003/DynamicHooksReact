import { useState, useEffect, useCallback } from 'react';
import './PasswordGenerator.css';

function PasswordGenerator() {
    const [length, setLength] = useState(8); // Default length
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState('');

    const generatePassword = useCallback(() => {
        const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+-=[]{}|;:",.<>?/';

        let validChars = letters;
        if (includeNumbers) validChars += numbers;
        if (includeSymbols) validChars += symbols;

        let newPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * validChars.length);
            newPassword += validChars[randomIndex];
        }

        setPassword(newPassword);
    }, [length, includeNumbers, includeSymbols]);

    useEffect(() => {
        generatePassword();
    }, [generatePassword]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert('Password copied to clipboard!');
    };

    return (
        <div className="password-generator">
            <h1>Password Generator</h1>
            <div className="output-section">
                <input
                    type="text"
                    readOnly
                    value={password}
                    placeholder="Generated password will appear here"
                />
                <button onClick={copyToClipboard}>Copy</button>
            </div>
            <div className="controls">
                <label>
                    Length:
                    <input
                        type="number"
                        min="4"
                        max="20"
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                    />
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={includeNumbers}
                        onChange={(e) => setIncludeNumbers(e.target.checked)}
                    />
                    Include Numbers
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={includeSymbols}
                        onChange={(e) => setIncludeSymbols(e.target.checked)}
                    />
                    Include Symbols
                </label>
            </div>
        </div>
    );
}

export default PasswordGenerator;
