import React, {useState} from 'react';
import '../Styles/forms.css';
import IngredientEditor from './RecipeEditor/IngredientEditor';
import StepsEditor from './RecipeEditor/StepEditor'

function RecipeEditor({updateRecipe, ingredients, steps}) {

    const handleSubmit = (event) => {
        updateRecipe([], {});
        event.preventDefault();
    }

  return (
    <div>
        <form className="search-form" onSubmit={handleSubmit}>
            {ingredients.map((ingredient, idx) => 
                <IngredientEditor ingredient={ingredient} idx={idx}/>
            )}
            {steps.map((step, idx) => 
                <StepsEditor step={step} idx={idx}/>
            )}
        </form>
    </div>
  );
}

export default RecipeEditor;