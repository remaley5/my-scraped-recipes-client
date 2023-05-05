import Ingredients from './RecipeSearch/Ingredients';
import Steps from './RecipeSearch/Steps';
import SearchForm from './RecipeSearch/SearchForm';
import RecipeEditor from './RecipeEditor';
import React, {useEffect} from 'react';
import { useSearchRecipe } from './hooks/searchRecipeHook';
import '../Styles/search.css';
import '../Styles/forms.css';

function CreateRecipes() {
    const { loading, error, steps, ingredients, progress, handleSearchSubmit, updateIngredients, updateSteps, handleFormProgress,  checkLocalStorage} = useSearchRecipe();


    useEffect(() => {
        checkLocalStorage();
    }, []);

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
