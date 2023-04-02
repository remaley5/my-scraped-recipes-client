import '../Styles/forms.css';
import IngredientEditor from './RecipeEditor/IngredientEditor';
import StepEditor from './RecipeEditor/StepEditor'

function RecipeEditor({handleFormProgress, updateSteps, updateIngredients, ingredients, steps, progress}) {

    const handleIngredientChange = (event, keyname) => {
        const newIngObj = {...ingredients};
        newIngObj[keyname][event.target.name] = event.target.value;
        updateIngredients(newIngObj);
    }

    const handleStepChange = (event, keyname) => {
        const newStepsObj = {...steps};
        newStepsObj[keyname] = event.target.value;
        updateSteps(newStepsObj);
    }

    return (
        <div>
            {/* <button onClick={() => handleFormProgress(progress === 'EDIT_STEPS' ? 'EDIT_INGREDIENTS' : 'SEARCH')}>Go back</button> */}

            <ul className="progressbar">
                <li className="first active">
                    <button 
                        disabled={false} 
                        onClick={(event) => handleFormProgress(event, 'SEARCH')}>
                        Search Recipes
                    </button>
                </li>
                <li className={progress === 'EDIT_INGREDIENTS' ? "second current" : "second active"}>
                    <button 
                    disabled={progress === 'EDIT_INGREDIENTS' ? true : false}
                    onClick={(event) => handleFormProgress(event, 'EDIT_INGREDIENTS')}
                    >
                        Edit Ingredients
                    </button>
                </li>
                <li className={progress === 'EDIT_STEPS' ? "third current" : "third"}>Edit Instructions</li>
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
                    Object.keys(steps).map((keyName) => 
                        <StepEditor 
                            key={`step${keyName}`} 
                            step={steps[keyName]} 
                            idx={keyName} 
                            handleStepChange={handleStepChange}
                        />
                    )}
            </form>
        </div>
    );
}

export default RecipeEditor;