import React, {useState} from 'react';
import '../../Styles/forms.css';

function StepEditor({step, idx, handleStepChange}) {
    const [disabled, setDisabled] = useState(false);

    const handleDisable = () => {
        if(disabled) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

  return (
    <div>
        <label>Step {idx}</label>
        <input 
            disabled={disabled}
            value={step}
            name='step'
            key={`step${idx}`}
            type='textarea'
            autoComplete='true'
            onChange={(event) => handleStepChange(event, idx)}
        />
        {/* <button onClick={handleStepDelete(idx)}>delete</button> */}
        <button onClick={handleDisable}>delete</button>
    </div>
  );
}

export default StepEditor;