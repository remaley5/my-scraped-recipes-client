import Ingredients from './RecipeSearch/Ingredients';
import Steps from './Steps';
import SearchForm from './RecipeSearch/SearchForm';
import RecipeEditor from './RecipeEditor';
import React, {useState} from 'react';
import '../Styles/search.css'

function CreateRecipes() {
    const [ingredients, setIngredients] = useState({});
    const [steps, setSteps] = useState({});

    const [active, setActive] = useState('SEARCH');

    const updateSteps = (updatedSteps) => {
        setSteps({...updatedSteps});
    }
    const updateIngredients = (updatedIngredients) => {
        setIngredients({...updatedIngredients});
    }

    const handleAccept = () => {
        setActive('EDIT');
    }

  return (
    <div>
        <h1> Create your Recipe </h1>
        {active === 'SEARCH' ? (
            <div>
            <div className="search-top">
                <h2>Copy from a site</h2>

                <SearchForm 
                    updateSteps={updateSteps} 
                    updateIngredients={updateIngredients}
                />
            </div>

            <Steps steps={steps}/>

            <Ingredients ingredients={ingredients}/>

            <button onClick={handleAccept}>Accept and Edit</button>
            </div> 
        ) : 
            <div>
                <RecipeEditor 
                    updateSteps={updateSteps} 
                    updateIngredients={updateIngredients} 
                    ingredients={ingredients} 
                    steps={steps}
                />
            </div>
        }
    </div>
  );
}

export default CreateRecipes;
