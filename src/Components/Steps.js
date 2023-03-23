
function Steps({steps}) {
  
    return (
        <div className="results-wrap">
          <h2>Results</h2>
          <div className="results">
            <h3>Steps</h3>
            <ul>
              {steps.map((step, idx) => 
                <li>
                    <span className="step-number">{idx + 1}. </span>
                    <span>{step}</span>
                </li>
                )}
              </ul>
          </div>
        </div>
      );
    }
  
  export default Steps;