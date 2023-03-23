import Ingredients from './Ingredients';
import SearchForm from './SearchForm';
import React, {useState} from 'react';
import '../Styles/search.css'

function CreateRecipes() {
    const [ingredients, setIngredients] = useState([]);

    const updateIngredients = (ingredientList) => {
        // console.log('updatingIngredients', ingredientList)
        setIngredients([...ingredientList]);
        // console.log('setIngredients', ingredients);
    }

  return (
    <div>
        <div className="search-top">
            <h1>Find your Recipe</h1>
        {/* <h2>Import From URL</h2> */}
            <SearchForm updateIngredients={updateIngredients}/>
        </div>
        <Ingredients ingredients={ingredients}/>
    </div>
  );
}

export default CreateRecipes;
