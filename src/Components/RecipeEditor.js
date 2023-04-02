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
                    <button disabled={false} onClick={() => handleFormProgress('SEARCH')}>
                        Search Recipes
                    </button>
                </li>
                <li className="current second"><button disabled={progress === 'EDIT_STEPS' ? false : true}>Edit Ingredients</button></li>
                <li className="third">Edit Instructions</li>
            </ul>

            <form className="search-form">
                <div>
                {progress = 'EDIT_INGREDIENTS' ? 
                        Object.keys(ingredients).map((keyName) => 
                            <IngredientEditor 
                                key={`ingredient${keyName}`}
                                idx={keyName} 
                                name={ingredients[keyName].name} 
                                unit={ingredients[keyName].unit}
                                quantity={ingredients[keyName].quantity}
                                handleIngredientChange={handleIngredientChange}
                            />
                        )
                 : 
                    Object.keys(steps).map((keyName) => 
                        <StepEditor 
                            key={`step${keyName}`} 
                            step={steps[keyName]} 
                            idx={keyName} 
                            handleStepChange={handleStepChange}
                        />
                    )}
                    </div>
            </form>
        </div>
    );
}

export default RecipeEditor;