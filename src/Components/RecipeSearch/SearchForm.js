import React, {useState} from 'react';
import '../../Styles/forms.css';

function SearchForm({updateRecipe}) {

    const [url, setUrl] = useState('');
    const [ingredients, setIngredients] = useState([]);
    //const [steps, setSteps] = useState([]);
    // Object
    const [steps, setSteps] = useState({});

    const [error, setErrorMessage] = useState('');

    const handleChange = (event) => {
        setUrl(event.target.value);
    }

    const scrapeRecipe = () => {
        const searchUrl = url;
        fetch('http://localhost:9000/scrape/useurl', {
            method: 'post', 
            headers: { 'Content-Type': 'application/json'}, 
            body: JSON.stringify({url: searchUrl})
        })
        .then((response) => { 
            if(response.status >= 400) {
                setErrorMessage("Sorry, we couldn't find that URL!");
                throw new Error("Server responded with an error");
            }
            return response.json()
        })
        .then((responseData) => {
            //setIngredients([...responseData.data.ingredients]); 

            /// push an object
            const stepsArr = [...responseData.data.steps];
            const stepsObj = {};
            stepsArr.forEach(function(step, idx) {
                stepsObj[idx+1] = step;
            });
            setSteps(stepsObj);

            const ingredientsArray = [...responseData.data.ingredients];
            const ingredientsObj = {};
            ingredientsArray.forEach(function(ingredient, idx) {
                ingredientsObj[idx+1] = ingredient;
            });
            setIngredients(ingredientsObj);

            //setSteps([...responseData.data.steps]);
        }).then(() => {
            updateRecipe(ingredients, steps);
            setErrorMessage('');
        });
      };

    const handleSubmit = (event) => {
        // updateRecipe({}, {});
        event.preventDefault();
        scrapeRecipe();
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
                    value={url}
                    onChange={handleChange}></input>
                <button>Submit Search</button>
            </div>    
            <div 
                className="error" 
                id="error-message">{error}</div>
        </form>
    </div>
  );
}

export default SearchForm;