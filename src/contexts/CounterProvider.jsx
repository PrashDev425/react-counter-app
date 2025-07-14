import { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export const useCounter = () => useContext(CounterContext);

export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [animate, setAnimate] = useState(false);

    const updateDisplay = () => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 400);
    };

    const counterUp = () => {
        setCount(count + 1);
        updateDisplay();
    };

    const counterDown = () => {
        if (count > 0) {
            setCount(count - 1);
            updateDisplay();
        }
    };

    const handleSetValue = () => {
        const value = parseInt(inputValue, 10);
        if (!isNaN(value) && !(value < 0)) {
            setCount(value)
            setInputValue('');
        }
    };

    const handleReset = () => {
        setCount(0);
        updateDisplay();
    };

    return (
        <CounterContext value={{ 
            count, inputValue, animate, 
            setInputValue, counterUp, counterDown, handleReset, handleSetValue 
        }}>
            {children}
        </CounterContext>
    );
};
