import React, {useState} from 'react';
import '../Styles/forms.css';
import IngredientEditor from './RecipeEditor/IngredientEditor';
import StepsEditor from './RecipeEditor/StepEditor'

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
        console.log('new steps obj[keyname]', newStepsObj[keyname]);
        newStepsObj[keyname] = event.target.value;
        setUpdatedSteps(newStepsObj);
    }

  return (
    <div>
        <form className="search-form" onSubmit={handleSubmit}>
            {Object.keys(updatedIngredients).map((keyName) => 
                <IngredientEditor 
                    key={`ingredient${keyName}`}
                    // ingredient={ingredients[keyName]} 
                    idx={keyName} handleIngredientChange={handleIngredientChange} 
                    name={updatedIngredients[keyName].name} unit={updatedIngredients[keyName].unit} 
                    quantity={updatedIngredients[keyName].quantity}
                />
            )}
            {Object.keys(updatedSteps).map((keyName) => 
                <StepsEditor key={`step${keyName}`} step={updatedSteps[keyName]} idx={keyName} handleStepChange={handleStepChange}/>
            )}
        </form>
    </div>
  );
}

export default RecipeEditor;