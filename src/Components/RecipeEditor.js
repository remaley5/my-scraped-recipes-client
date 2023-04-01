import React, {useState} from 'react';
import '../Styles/forms.css';
import IngredientEditor from './RecipeEditor/IngredientEditor';
import StepEditor from './RecipeEditor/StepEditor'

function RecipeEditor({updateRecipe, ingredients, steps}) {
    const [updatedIngredients, setUpdatedIngredients] = useState(ingredients);
    const [updatedSteps, setUpdatedSteps] = useState(steps);

    const handleSubmit = (event) => {
        //updateRecipe({}, {});
        event.preventDefault();
    }

    const handleIngredientChange = (event, keyname) => {
        const newIngObj = {...updatedIngredients};
        newIngObj[keyname][event.target.name] = event.target.value;
        setUpdatedIngredients(newIngObj);
    }

    const handleStepChange = (event, keyname) => {
        const newStepsObj = {...updatedSteps};
        newStepsObj[keyname] = event.target.value;
        setUpdatedSteps(newStepsObj);
    }

    // const handleIngredientDelete = (keyname) => {
    //     const newIngObj = {...updatedIngredients};
    //     delete newIngObj[keyname];
    //     setUpdatedIngredients(newIngObj);
    // }

    // const handleStepDelete = (keyname) => {
    //     const newStepsObj = {...updatedSteps};
    //     delete newStepsObj[keyname];
    //     setUpdatedSteps(newStepsObj);
    // }

  return (
    <div>
        <form className="search-form" onSubmit={handleSubmit}>
            {Object.keys(updatedIngredients).map((keyName) => 
                <IngredientEditor 
                    key={`ingredient${keyName}`}
                    idx={keyName} 
                    name={updatedIngredients[keyName].name} 
                    unit={updatedIngredients[keyName].unit}
                    quantity={updatedIngredients[keyName].quantity}
                    handleIngredientChange={handleIngredientChange}
                />
            )}
            {Object.keys(updatedSteps).map((keyName) => 
                <StepEditor 
                    key={`step${keyName}`} 
                    step={updatedSteps[keyName]} 
                    idx={keyName} 
                    handleStepChange={handleStepChange} 
                />
            )}
        </form>
    </div>
  );
}

export default RecipeEditor;