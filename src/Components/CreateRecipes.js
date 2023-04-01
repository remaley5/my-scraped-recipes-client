import Ingredients from './RecipeSearch/Ingredients';
import Steps from './Steps';
import SearchForm from './RecipeSearch/SearchForm';
import RecipeEditor from './RecipeEditor';
import React, {useState} from 'react';
import '../Styles/search.css'

function CreateRecipes() {
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState({});

    const [active, setActive] = useState('SEARCH');

    const updateRecipe = (ingredientList, stepList) => {
        setIngredients(ingredientList);
        setSteps(stepList);
        console.log('stepList', stepList);
    }

    const handleAccept = () => {
        setActive('EDIT');
    }

  return (
    <div>
        {active === 'SEARCH' ? (
            <div>
            <div className="search-top">
                <h1>Find your Recipe</h1>
                <SearchForm updateRecipe={updateRecipe}/>
            </div>
            <Steps steps={steps}/>
            <Ingredients ingredients={ingredients}/>
            <button onClick={handleAccept}>Accept and Edit</button>
            </div> 
        ) : 
            <div>
                <RecipeEditor updateRecipe={updateRecipe} ingredients={ingredients} steps={steps}/>
            </div>
        }
    </div>
  );
}

export default CreateRecipes;
