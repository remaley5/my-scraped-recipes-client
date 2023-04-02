import React, {useState} from 'react';
import '../../Styles/forms.css';

function StepEditor({step, idx, handleStepChange}) {
    const [disabled, setDisabled] = useState(false);

    const handleDisable = (event) => {
        event.preventDefault();
        if(disabled) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

  return (
    <div className="item step">
        <label>Step {idx}</label>
        <textarea 
            disabled={disabled}
            value={step}
            name='step'
            key={`step${idx}`}
            type='text'
            autoComplete='true'
            onChange={(event) => handleStepChange(event, idx)}
        />
        {/* <button onClick={handleStepDelete(idx)}>delete</button> */}
        <button onClick={handleDisable}>delete</button>
    </div>
  );
}

export default StepEditor;