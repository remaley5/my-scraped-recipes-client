import React, {useState} from 'react';
import '../../Styles/forms.css';

function IngredientEditor({ingredient, idx}) {
    const [unit, setUnit] = useState(ingredient.unit);
    const [quantity, setQuantity] = useState(ingredient.quantity);
    const [name, setName] = useState(ingredient.name);

    const handleChange = (event) => {
        console.log(event.target.name);
        if(event.target.name === "unit") {
            setUnit(event.target.value);
            console.log('setting unit', event.target.value);
        } else if(event.target.name === "name") {
            setName(event.target.value);
            console.log('setting ')
        } else {
            setQuantity(event.target.value);
        }
    }

  return (
    <fieldset className="form-group">
            <legend id={`ingredient${idx}`}>
                Ingredient {idx + 1}
            </legend>
            <label className="hidden-label">
                unit for ingredient {idx + 1}
            </label>
            <input
                type="text"
                autoComplete='true'
                onChange={handleChange}
                value={unit}
                name={'unit'}
                aria-describedby={`ingredient${idx}`}
            />
        <label className="hidden-label">
            quantity for ingredient {idx + 1}
        </label>
        <input
            type="text"
            autoComplete='true'
            onChange={handleChange}
            value={quantity}
            name={'quantity'}
            aria-describedby={`ingredient${idx}`}
            />
        <label className="hidden-label">
            type for ingredient {idx + 1}
        </label>
        <input
            type="text"
            autoComplete='true'
            onChange={handleChange}
            value={name}
            name={'name'}
            aria-describedby={`ingredient${idx}`}
            /> 
    </fieldset>
  );
}

export default IngredientEditor;