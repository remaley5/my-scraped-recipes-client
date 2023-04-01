//import React, {useState} from 'react';
import '../Styles/forms.css';
import IngredientEditor from './RecipeEditor/IngredientEditor';
import StepsEditor from './RecipeEditor/StepEditor'

function RecipeEditor({updateRecipe, ingredients, steps}) {

    const handleSubmit = (event) => {
        updateRecipe({}, {});
        event.preventDefault();
    }

  return (
    <div>
        <form className="search-form" onSubmit={handleSubmit}>
            {Object.keys(ingredients).map((keyName) => 
                <IngredientEditor key={`ingredient${keyName}`} ingredient={ingredients[keyName]} idx={keyName}/>
            )}
            {Object.keys(steps).map((keyName, idx) => 
                <StepsEditor key={`step${keyName}`} step={steps[keyName]} idx={keyName}/>
            )}
        </form>
    </div>
  );
}

export default RecipeEditor;