// import React, {useState} from 'react';
import '../../Styles/forms.css';

function IngredientEditor({name, unit, quantity, idx, handleIngredientChange}) {
    // const [unit, setUnit] = useState(ingredient.unit);
    // const [quantity, setQuantity] = useState(ingredient.quantity);
    // const [name, setName] = useState(ingredient.name);

    // const handleIngredientChange = (event) => {
    //     console.log(event.target.name);
    //     if(event.target.name === "unit") {
    //         setUnit(event.target.value);
    //         console.log('setting unit', event.target.value);
    //     } else if(event.target.name === "name") {
    //         setName(event.target.value);
    //         console.log('setting ')
    //     } else {
    //         setQuantity(event.target.value);
    //     }
    // }

  return (
    <fieldset className="form-group">
            <legend id={`ingredient${idx}`}>
                Ingredient {idx + 1}
            </legend>
            <label className="hidden-label">
                unit for ingredient {idx}
            </label>
            <input
                type="text"
                autoComplete='true'
                onChange={(event) => handleIngredientChange(event, idx)}
                value={unit}
                name={'unit'}
                keyname={idx}
                aria-describedby={`ingredient${idx}`}
            />
        <label className="hidden-label">
            quantity for ingredient {idx + 1}
        </label>
        <input
            type="text"
            autoComplete='true'
            onChange={(event) => handleIngredientChange(event, idx)}
            value={quantity}
            name={'quantity'}
            keyname={idx}
            aria-describedby={`ingredient${idx}`}
            />
        <label className="hidden-label">
            type for ingredient {idx + 1}
        </label>
        <input
            type="text"
            autoComplete='true'
            onChange={(event) => handleIngredientChange(event, idx)}
            value={name}
            name={'name'}
            keyname={idx}
            aria-describedby={`ingredient${idx}`}
            /> 
    </fieldset>
  );
}

export default IngredientEditor;