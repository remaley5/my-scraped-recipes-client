import React, {useState} from 'react';
import '../../Styles/forms.css';

function IngredientEditor({step, idx}) {
    const [stepText, setStepText] = useState(step);

    const handleChange = (event) => {
        setStepText(event.target.value);
    }

  return (
    <div>
        <label>Step {idx + 1}</label>
        <input 
            value={stepText}
            name='step'
            key={`step${idx+1}`}
            type='textarea'
            autoComplete='true'
            onChange={handleChange}
            />
    </div>
  );
}

export default IngredientEditor;