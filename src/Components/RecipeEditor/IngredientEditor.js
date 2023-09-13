import React, {useState} from 'react';
import '../../Styles/forms.css';

function IngredientEditor({name, unit, quantity, idx, handleIngredientChange}) {
    const [disabled, setDisabled] = useState(false);

    const handleDisabled = (event) => {
        event.preventDefault();
        // // console.log('disabled ', disabled);
        if(!!disabled) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

  return (
    <div>
        <fieldset className="form-group">
            <legend 
            //id={`ingredient${idx}`}
            >
                Ingredient {idx}
            </legend>
            <div className="item qty">
                <label htmlFor={`quanitity${idx}`}>
                    quantity
                </label>
                <input
                    disabled={disabled}
                    type="text"
                    autoComplete='true'
                    onChange={(event) => handleIngredientChange(event, idx)}
                    value={quantity}
                    name={'quantity'}
                    keyname={idx}
                    //aria-describedby={`ingredient${idx}`}
                    />
            </div>
            <div className="item unit">
                <label htmlFor={`unit${idx}`}>
                    unit
                </label>
                <input
                    disabled={disabled}
                    type="text"
                    autoComplete='true'
                    onChange={(event) => handleIngredientChange(event, idx)}
                    value={unit}
                    name={'unit'}
                    keyname={idx}
                    //aria-describedby={`ingredient${idx}`}
                />
            </div>
            <div className="item name">
                <label htmlFor={`name${idx}`}>
                    type
                </label>
                <input
                    disabled={disabled}
                    type="text"
                    autoComplete='true'
                    onChange={(event) => handleIngredientChange(event, idx)}
                    value={name}
                    name={'name'}
                    keyname={idx}
                    //aria-describedby={`ingredient${idx}`}
                    /> 
            </div>
            <button
                //onClick={() => handleIngredientDelete(idx)}
                onClick={(handleDisabled)}
                >
                delete
            </button>
        </fieldset>

    </div>
  );
}

export default IngredientEditor;