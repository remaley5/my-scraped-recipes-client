import Ingredients from './Ingredients';
import React, {useEffect, useState} from 'react';

function CreateRecipes() {

    const [url, setUrl] = useState('');

    const handleChange = (event) => {
        setUrl(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(url);
    }

  return (
    <div>
        <h1>Scrape Recipe</h1>
        <h2>Import your recipe</h2>
        <form onSubmit={handleSubmit}>
            <label for="url-input">URL</label>
            <input 
                id="url-input" 
                name="url" 
                type="text" 
                autoComplete='true'
                value={url}
                onChange={handleChange}></input>
            <button>Submit Search</button>
        </form>
        <h2>Ingredients</h2>
        <Ingredients/>
    </div>
  );
}

export default CreateRecipes;
