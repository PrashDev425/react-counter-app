import { useCounter } from '../../contexts/CounterProvider';
import upicon from '../../assets/up.svg';
import downicon from '../../assets/down.svg';
import reseticon from '../../assets/reset.svg';
import History from '../history/History';
import './Counter.css';

function Counter() {
  const { count, inputValue, animate, history, setInputValue, counterUp, counterDown, handleReset, handleSetValue } = useCounter();

  return (
    <div className="container">
      <div className="main">
        <div className="display">
          <p>Current Count</p>
          <div id="count" className={`count ${animate ? 'pulse' : ''}`}>{count}</div>
          <div className="bar"></div>
        </div>
        <div className="controls">
          <button className="btn increment" onClick={() => counterUp()}> <img src={upicon} alt="" /></button>
          <button className="btn reset" onClick={handleReset}> <img src={reseticon} alt="" /></button>
          <button className="btn decrement" disabled={count === 0} onClick={() => counterDown()}> <img src={downicon} alt="" /></button>
        </div>
        <div className="custom-input">
          <label htmlFor="set-value">Set value:</label>
          <div className="input-group">
            <input
              type="number"
              id="set-value"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSetValue()}
            />
            <button className="add-btn" onClick={handleSetValue}>Set</button>
          </div>
        </div>
        <History history={history} />
      </div>
      <div className="footer">
        Click any button to interact with the counter
      </div>
    </div>
  );
}

export default Counter;