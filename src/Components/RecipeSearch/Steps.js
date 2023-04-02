
function Steps({steps}) {
  
    return (
          <div className="results">
            <h3>Steps</h3>
            <ul>
              {/* {steps.map((step, idx) =>  */}
              {Object.keys(steps).map((keyName, idx) => 
                <li key={`step${keyName}`} className="step">
                    <div>
                        <span className="step-number">Step {keyName}: </span>
                    </div>
                    <p>{steps[keyName]}</p>
                </li>
                )}
              </ul>
          </div>
      );
    }
  
  export default Steps;