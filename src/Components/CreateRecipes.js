import Ingredients from './RecipeSearch/Ingredients';
import Steps from './RecipeSearch/Steps';
import SearchForm from './RecipeSearch/SearchForm';
import RecipeEditor from './RecipeEditor';
import React, {useState, useEffect} from 'react';
import '../Styles/search.css';
import '../Styles/forms.css';

function CreateRecipes() {
    const [ingredients, setIngredients] = useState({});
    const [steps, setSteps] = useState({});

    const [progress, setprogress] = useState('SEARCH');

    // Save state in localstorage
    useEffect(() => {
        var storedSteps = JSON.parse(window.localStorage.getItem('steps'));
        var storedIngredients = JSON.parse(window.localStorage.getItem('ingredients'));
        var storedProgress = window.localStorage.getItem('progress');
        if(storedSteps !== null) {
            setSteps(storedSteps);
        } 
        if(storedIngredients !== null) {
            setIngredients(storedIngredients);
        }
        if(storedProgress !== null) {
            setprogress(storedProgress);
        }
    }, []);


    // Update Recipe State
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

    // Track Form Progress
    const handleFormProgress = (progressState) => {
        setprogress(progressState);
        window.localStorage.setItem('progress', progressState);
    }

  return (
    <div>
        <h1> Create your Recipe </h1>
        {progress === 'SEARCH' ? (
            <div>
                <ul className="progressbar">
                    <li className="first current">Search Recipe</li>
                    <li className="second"> Edit Ingredients</li>
                    <li className="third">Edit Instructions</li>
                </ul>
                <div className="search-top">
                    <h2 id="search-recipe-label">Search by URL</h2>

                    <SearchForm 
                        updateSteps={updateSteps} 
                        updateIngredients={updateIngredients}
                    />
                </div>
                <div className="results-wrap">
                    <h2>Recipe</h2>
                    <Steps steps={steps}/>

                    <Ingredients ingredients={ingredients}/>

                    <button 
                        className="accept submit-button"
                        onClick={() => handleFormProgress('EDIT_INGREDIENTS')}>Accept and Edit</button>
                </div>
            </div> 
        ) : 
            <div>
                <RecipeEditor 
                    handleFormProgress={handleFormProgress}
                    updateSteps={updateSteps} 
                    ingredients={ingredients} 
                    steps={steps}
                    progress={progress}
                />
            </div>
        }
    </div>
  );
}

export default CreateRecipes;
