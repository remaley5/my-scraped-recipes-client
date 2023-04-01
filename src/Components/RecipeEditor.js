import React, {useState} from 'react';
import '../Styles/forms.css';
import IngredientInput from './RecipeEditor/IngredientInput';

function RecipeEditor({updateIngredients, ingredients}) {

    const handleSubmit = (event) => {
        updateIngredients([], []);
        event.preventDefault();
    }

  return (
    <div>
        <form className="search-form" onSubmit={handleSubmit}>
            {ingredients.map((ingredient, idx) => 
                <IngredientInput ingredient={ingredient} idx={idx}/>
            )}
        </form>
    </div>
  );
}

export default RecipeEditor;