import React, {useState} from 'react';
import '../../Styles/forms.css';

function RecipeEditor({updateIngredients}) {

    const handleChange = (event) => {
    }

    const handleSubmit = (event) => {
        updateIngredients([], []);
        event.preventDefault();
    }

  return (
    <div>
        <form className="search-form" onSubmit={handleSubmit}>
            <label htmlFor="url-input">Recipe Link</label>
            <div className="control-wrap">
                <input 
                    id="url-input" 
                    name="url" 
                    type="text" 
                    autoComplete='true'
                    aria-describedby='error-message'
                    onChange={handleChange}></input>
                <button>Submit Search</button>
            </div>    
        </form>
    </div>
  );
}

export default RecipeEditor;