import Ingredients from './Ingredients';
import SearchForm from './SearchForm';
import React, {useState} from 'react';

function CreateRecipes() {
    const [ingredients, setIngredients] = useState([]);

    const updateIngredients = (ingredientList) => {
        console.log('updatingIngredients', ingredientList)
        setIngredients([...ingredientList]);
        console.log('setIngredients', ingredients);
    }

  return (
    <div>
        <h1>Scrape Recipe</h1>
        <h2>Import your recipe</h2>
        <h2>Ingredients</h2>
        <SearchForm updateIngredients={updateIngredients}/>
        <Ingredients ingredients={ingredients}/>
    </div>
  );
}

export default CreateRecipes;
