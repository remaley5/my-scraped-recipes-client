import Ingredients from './RecipeSearch/Ingredients';
import Steps from './Steps';
import SearchForm from './RecipeSearch/SearchForm';
import RecipeEditor from './RecipeEditor';
import React, {useState, useEffect} from 'react';
import '../Styles/search.css'

function CreateRecipes() {
    const [ingredients, setIngredients] = useState({});
    const [steps, setSteps] = useState({});

    const [active, setActive] = useState('SEARCH');

    // Save state in localstorage
    useEffect(() => {
        var storedSteps = JSON.parse(window.localStorage.getItem('steps'));
        var storedIngredients = JSON.parse(window.localStorage.getItem('ingredients'));
        var storedActive = window.localStorage.getItem('active');
        if(storedSteps !== null) {
            setSteps(storedSteps);
        } 
        if(storedIngredients !== null) {
            setIngredients(storedIngredients);
        }
        if(storedActive !== null) {
            setActive(storedActive);
        }
    }, []);



    const updateSteps = (updatedSteps) => {
        setSteps({...updatedSteps});
        window.localStorage.setItem('steps', JSON.stringify(updatedSteps));
    }

    const updateIngredients = (updatedIngredients) => {
        console.log('ingredients updating');
        setIngredients({...updatedIngredients});
        console.log('updatedIngredients', updatedIngredients);
        window.localStorage.setItem('ingredients', JSON.stringify(updatedIngredients));
    }

    const handleAccept = () => {
        setActive('EDIT');
        window.localStorage.setItem('active', 'EDIT');
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
                    ingredients={ingredients} 
                    steps={steps}
                />
            </div>
        }
    </div>
  );
}

export default CreateRecipes;
