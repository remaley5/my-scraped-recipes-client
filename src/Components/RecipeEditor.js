import React, {useState} from 'react';
import '../Styles/forms.css';
import IngredientEditor from './RecipeEditor/IngredientEditor';
import StepsEditor from './RecipeEditor/StepEditor'

function RecipeEditor({updateRecipe, ingredients, steps}) {
    const [updatedIngredients, setUpdatedIngredients] = useState(ingredients);
    //const [updatedSteps, setUpdatedSteps] = useState(steps);

    const handleSubmit = (event) => {
        updateRecipe({}, {});
        event.preventDefault();
    }

    const handleIngredientChange = (event, keyname) => {
        const newObj = {...updatedIngredients};
        newObj[keyname][event.target.name] = event.target.value;
        setUpdatedIngredients(newObj);
    }

  return (
    <div>
        <form className="search-form" onSubmit={handleSubmit}>
            {Object.keys(ingredients).map((keyName) => 
                <IngredientEditor 
                    key={`ingredient${keyName}`}
                    // ingredient={ingredients[keyName]} 
                    idx={keyName} handleIngredientChange={handleIngredientChange} 
                    name={ingredients[keyName].name} unit={ingredients[keyName].unit} 
                    quantity={ingredients[keyName].quantity}
                />
            )}
            {Object.keys(steps).map((keyName, idx) => 
                <StepsEditor key={`step${keyName}`} step={steps[keyName]} idx={keyName}/>
            )}
        </form>
    </div>
  );
}

export default RecipeEditor;