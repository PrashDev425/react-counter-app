import { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export const useCounter = () => useContext(CounterContext);

export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [animate, setAnimate] = useState(false);
    const [history, setHistory] = useState([]);

    const updateDisplay = () => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 400);
    };

    const addHistory = (text, type) => {
        const time = new Date().toLocaleTimeString();
        const newEntry = { text, type, time };
        setHistory(prev => {
            const updated = [newEntry, ...prev];
            return updated.slice(0, 5);
        });
    };

    const counterUp = () => {
        let newCount = count + 1;
        setCount(newCount);
        addHistory(`Incremented to ${newCount}`, 'increment');
        updateDisplay();
    };

    const counterDown = () => {
        if (count > 0) {
            let newCount = count - 1;
            setCount(newCount);
            addHistory(`Decremented to ${newCount}`, 'decrement');
            updateDisplay();
        }
    };

    const handleSetValue = () => {
        const value = parseInt(inputValue, 10);
        if (!isNaN(value) && !(value < 0)) {
            setCount(value)
            addHistory(`Set to ${value}`, 'reset');
            setInputValue('');
        }
    };

    const handleReset = () => {
        if (count != 0) {
            setCount(0);
            updateDisplay();
            addHistory('Reset to 0', 'reset');
        }
    };

    return (
        <CounterContext value={{
            count, inputValue, animate, history,
            setInputValue, counterUp, counterDown, handleReset, handleSetValue
        }}>
            {children}
        </CounterContext>
    );
};
