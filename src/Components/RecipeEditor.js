import '../Styles/forms.css';
import IngredientEditor from './RecipeEditor/IngredientEditor';
import StepEditor from './RecipeEditor/StepEditor'

function RecipeEditor({updateSteps, updateIngredients, ingredients, steps}) {

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

    // const handleIngredientDelete = (keyname) => {
    //     const newIngObj = {...ingredients};
    //     delete newIngObj[keyname];
    //     setIngredients(newIngObj);
    // }

    // const handleStepDelete = (keyname) => {
    //     const newStepsObj = {...steps};
    //     delete newStepsObj[keyname];
    //     setSteps(newStepsObj);
    // }

  return (
    <div>
        <form className="search-form">
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
            {Object.keys(steps).map((keyName) => 
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