
function Steps({steps}) {
  
    return (
        <div className="results-wrap">
          <h2>Results</h2>
          <div className="results">
            <h3>Steps</h3>
            <ul>
              {steps.map((step, idx) => 
                <li key={`step${idx + 1}`} className="step">
                    <div>
                        <span className="step-number">Step {idx + 1}: </span>
                    </div>
                    <p>{step}</p>
                </li>
                )}
              </ul>
          </div>
        </div>
      );
    }
  
  export default Steps;