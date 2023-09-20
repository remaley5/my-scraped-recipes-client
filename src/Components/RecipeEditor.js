import '../Styles/Components/forms.css';
import IngredientEditor from './RecipeEditor/IngredientEditor';
import StepEditor from './RecipeEditor/StepEditor';
import { fetchRecipe } from './services/recipe.service';
import { useSearchRecipe } from './hooks/useSearchRecipe';

function RecipeEditor({ updateIngredients, updateSteps, handleFormProgress, steps, ingredients, progress }) {

    // const {updateIngredients, updateSteps, handleFormProgress, steps, ingredients, progress} = useSearchRecipe();

    const handleIngredientChange = (event, keyname) => {
        const newIngObj = { ...ingredients };
        newIngObj[keyname][event.target.name] = event.target.value;
        updateIngredients(newIngObj);
    }

    const handleStepChange = (event, keyname) => {
        const newStepsObj = { ...steps };
        newStepsObj[keyname] = event.target.value;
        updateSteps(newStepsObj);
    }

    const handleSaveRecipe = async() => {
        var recipe = {
            steps, 
            ingredients
        }
        var response = await fetchRecipe(recipe);
        // console.log('response: ', response);
    }

    return (
        <div>
            {/* <button onClick={() => handleFormProgress(progress === 'EDIT_STEPS' ? 'EDIT_INGREDIENTS' : 'SEARCH')}>Go back</button> */}

            <ul className="progressbar">
                <li className="first clickable">
                    <button
                        disabled={false}
                        onClick={(event) => handleFormProgress(event, 'SEARCH')}>
                        Search Recipes
                    </button>
                </li>
                <li className={progress === 'EDIT_INGREDIENTS' ? "second active" : "second clickable"}>
                    <button
                        disabled={progress === 'EDIT_INGREDIENTS' ? true : false}
                        onClick={(event) => handleFormProgress(event, 'EDIT_INGREDIENTS')}
                    >
                        Edit Ingredients
                    </button>
                </li>
                <li className={progress === 'EDIT_STEPS' ? "third active" : "third disabled"}>Edit Instructions</li>
            </ul>

            <form className="recipe-editor">
                {progress === 'EDIT_INGREDIENTS' ?
                    <div>
                        {Object.keys(ingredients).map((keyName) =>
                            <IngredientEditor
                                key={`ingredient${keyName}`}
                                idx={keyName}
                                name={ingredients[keyName].name}
                                unit={ingredients[keyName].unit}
                                quantity={ingredients[keyName].quantity}
                                handleIngredientChange={handleIngredientChange}
                            />
                        )}
                        <button className="accept submit-button" onClick={(event) => {
                            handleFormProgress(event, 'EDIT_STEPS')
                        }}>Save and Continue</button>
                    </div>
                    :
                    <div>
                        {Object.keys(steps).map((keyName) =>
                            <StepEditor
                                key={`step${keyName}`}
                                step={steps[keyName]}
                                idx={keyName}
                                handleStepChange={handleStepChange}
                            />)}
                        <button onClick={handleSaveRecipe} className="submit-button">Save Recipe</button>
                    </div>
                }
            </form>
        </div>
    );
}

export default RecipeEditor;