import './History.css';

const History = ({ history }) => {
  return (
    <div className="history">
      <p>Recent Actions:</p>
      <div id="history">
        {history.length === 0 ? (
          <div className="text-muted">No actions yet</div>
        ) : (
          history.map((item, index) => (
            <div className="history-entry" key={index}>
              <span
                className={
                  item.type === 'increment'
                    ? 'text-green'
                    : item.type === 'decrement'
                    ? 'text-red'
                    : 'text-muted'
                }
              >
                {item.text}
              </span>
              <span className="text-muted"> {item.time}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default History;
