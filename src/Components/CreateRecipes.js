import Ingredients from './Ingredients';
import Steps from './Steps';
import SearchForm from './SearchForm';
import React, {useState} from 'react';
import '../Styles/search.css'

function CreateRecipes() {
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState([]);

    const updateIngredients = (ingredientList, stepList) => {
        setIngredients([...ingredientList]);
        setSteps(stepList);
    }

  return (
    <div>
        <div className="search-top">
            <h1>Find your Recipe</h1>
        {/* <h2>Import From URL</h2> */}
            <SearchForm updateIngredients={updateIngredients}/>
        </div>
        <Steps steps={steps}/>
        <Ingredients ingredients={ingredients}/>
    </div>
  );
}

export default CreateRecipes;
