import React, {useState} from 'react';
import '../../Styles/forms.css';

function IngredientEditor({name, unit, quantity, idx, handleIngredientChange, handleIngredientDelete}) {
    const [disabled, setDisabled] = useState(false);

    const handleDisabled = (event) => {
        event.preventDefault();
        console.log('disabled ', disabled);
        if(!!disabled) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

  return (
    <div>
        <fieldset className="form-group" disabled={disabled}>
                <legend id={`ingredient${idx}`}>
                    Ingredient {idx}
                </legend>
                <label className="hidden-label">
                    unit for ingredient {idx}
                </label>
                <input
                    disabled={disabled}
                    type="text"
                    autoComplete='true'
                    onChange={(event) => handleIngredientChange(event, idx)}
                    value={unit}
                    name={'unit'}
                    keyname={idx}
                    aria-describedby={`ingredient${idx}`}
                />
            <label className="hidden-label">
                quantity for ingredient {idx}
            </label>
            <input
                disabled={disabled}
                type="text"
                autoComplete='true'
                onChange={(event) => handleIngredientChange(event, idx)}
                value={quantity}
                name={'quantity'}
                keyname={idx}
                aria-describedby={`ingredient${idx}`}
                />
            <label className="hidden-label">
                type for ingredient {idx}
            </label>
            <input
                disabled={disabled}
                type="text"
                autoComplete='true'
                onChange={(event) => handleIngredientChange(event, idx)}
                value={name}
                name={'name'}
                keyname={idx}
                aria-describedby={`ingredient${idx}`}
                /> 
        </fieldset>
        <button
            //onClick={() => handleIngredientDelete(idx)}
            onClick={(handleDisabled)}
            >
            delete
        </button>
    </div>
  );
}

export default IngredientEditor;