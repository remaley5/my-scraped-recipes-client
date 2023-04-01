import Ingredients from './Ingredients';
import Steps from './Steps';
import SearchForm from './SearchForm';
import React, {useState} from 'react';
import '../Styles/search.css'

function CreateRecipes() {
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState([]);
    const [active, setActive] = useState('SEARCH');

    const updateIngredients = (ingredientList, stepList) => {
        setIngredients([...ingredientList]);
        setSteps([...stepList]);
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
                <SearchForm updateIngredients={updateIngredients}/>
            </div>
            <Steps steps={steps}/>
            <Ingredients ingredients={ingredients}/>
            <button onClick={handleAccept}>Accept and Edit</button>
            </div> 
        ) : 
            <div>
                <h1>Testing</h1>
            </div>
        }
    </div>
  );
}

export default CreateRecipes;
