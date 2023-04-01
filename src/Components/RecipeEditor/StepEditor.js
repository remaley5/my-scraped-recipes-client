import React, {useState} from 'react';
import '../../Styles/forms.css';

function IngredientEditor({step, idx, handleStepChange}) {

  return (
    <div>
        <label>Step {idx + 1}</label>
        <input 
            value={step}
            name='step'
            key={`step${idx+1}`}
            type='textarea'
            autoComplete='true'
            onChange={(event) => handleStepChange(event, idx)}
        />
    </div>
  );
}

export default IngredientEditor;