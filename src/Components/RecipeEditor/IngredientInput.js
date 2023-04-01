import React, {useState} from 'react';
import '../Styles/forms.css';

function IngredientEditor({ingredient, idx}) {
    const [unit, setUnit] = useState(ingredient.unit);
    const [quantity, setQuantity] = useState(ingredient.quantity);
    const [name, setName] = useState(ingredient.name);

    const handleChange = (event) => {
    }

  return (
    <fieldset className="form-group">
            <legend id={`ingredient${idx}`}>
                `Step ${idx + 1}`
            </legend>
            <label className="hidden-label">
                Ingredient {idx + 1} unit
            </label>
            <input
                type="text"
                autoComplete='true'
                onChange={handleChange}
                value={unit}
                name={unit}
                aria-describedby={`ingredient${idx}`}
            />
        <label className="hidden-label">
            Ingredient {idx + 1} quantity
        </label>
        <input
            type="text"
            autoComplete='true'
            onChange={handleChange}
            value={quantity}
            name={quantity}
            aria-describedby={`ingredient${idx}`}
            />
        <label className="hidden-label">
            Ingredient {idx + 1} type
        </label>
        <input
            type="text"
            autoComplete='true'
            onChange={handleChange}
            value={name}
            name={name}
            aria-describedby={`ingredient${idx}`}
            /> 
    </fieldset>
  );
}

export default IngredientEditor;