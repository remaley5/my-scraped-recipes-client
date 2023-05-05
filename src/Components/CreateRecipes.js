import Ingredients from './RecipeSearch/Ingredients';
import Steps from './RecipeSearch/Steps';
import SearchForm from './RecipeSearch/SearchForm';
import RecipeEditor from './RecipeEditor';
import React, {useState, useEffect} from 'react';
import { useSearchRecipe } from './hooks/searchRecipeHook';
import '../Styles/search.css';
import '../Styles/forms.css';

function CreateRecipes() {
    // const [ingredients, setIngredients] = useState({});
    const [progress, setprogress] = useState('SEARCH');
    
    const { loading, error, steps, ingredients, handleSearchSubmit } = useSearchRecipe();

    // Save state in sessionStorage
    useEffect(() => {
        var storedSteps = JSON.parse(window.sessionStorage.getItem('steps'));
        var storedIngredients = JSON.parse(window.sessionStorage.getItem('ingredients'));
        var storedProgress = window.sessionStorage.getItem('progress');
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
    // const updateSteps = (updatedSteps) => {
    //     setSteps({...updatedSteps});
    //     window.sessionStorage.setItem('steps', JSON.stringify(updatedSteps));
    // }

    // const updateIngredients = (updatedIngredients) => {
    //     //console.log('ingredients updating');
    //     setIngredients({...updatedIngredients});
    //     //console.log('updatedIngredients', updatedIngredients);
    //     window.sessionStorage.setItem('ingredients', JSON.stringify(updatedIngredients));
    // }

    // Track Form Progress
    const handleFormProgress = (event, progressState) => {
        event.preventDefault();
        console.log('setting progress state');
        setprogress(progressState);
        window.sessionStorage.setItem('progress', progressState);
    }

  return (
    <div>
        <h1 className="create-heading"> Create your Recipe </h1>
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
                        loading={loading}
                        error={error}
                        handleSearchSubmit={handleSearchSubmit}
                    />
                </div>
                <div className="results-wrap">
                    <h2>Recipe</h2>
                    <Steps steps={steps}/>

                    <Ingredients ingredients={ingredients}/>

                    <button 
                        className="accept submit-button"
                        onClick={(event) => handleFormProgress(event, 'EDIT_INGREDIENTS')}>Accept and Edit</button>
                </div>
            </div> 
        ) : 
            <div>
                <RecipeEditor 
                    handleFormProgress={handleFormProgress}
                    updateSteps={updateSteps} 
                    updateIngredients={updateIngredients}
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
