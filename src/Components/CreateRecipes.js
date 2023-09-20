import Ingredients from './RecipeSearch/Ingredients';
import Steps from './RecipeSearch/Steps';
import SearchForm from './RecipeSearch/SearchForm';
import RecipeEditor from './RecipeEditor';
import React, {useEffect} from 'react';
import { useSearchRecipe } from './hooks/useSearchRecipe';
import '../Styles/Components/displayrecipe.css';
import '../Styles/Components/forms.css';
import '../Styles/Components/progressbar.css'

function CreateRecipes() {
    const { loading, error, steps, ingredients, progress, handleSearchSubmit, updateIngredients, updateSteps, handleFormProgress,  checkLocalStorage} = useSearchRecipe();


    useEffect(() => {
        checkLocalStorage();
    }, []);

  return (
    <div>
        <h1 className="create-heading"> Recipe Clipper </h1>
        {progress === 'SEARCH' ? (
            <div>
                
            <ul className="progressbar">
                <li className="first current">
                    <button >
                        Search Recipes
                    </button>
                </li>
                <li className="second">
                    <button disabled="true">
                        Edit Ingredients
                    </button>
                </li>
                <li className="third" disabled="true"><button disabled="true">Edit Instructions</button></li>
            </ul>
                <div className="search-top">
                    <SearchForm
                        loading={loading}
                        error={error}
                        handleSearchSubmit={handleSearchSubmit}
                    />
                </div>
                <div className="results-wrap">
                    <h2>Here's what we found</h2>
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
