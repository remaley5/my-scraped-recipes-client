import React, {useState} from 'react';

function SearchForm({updateIngredients}) {

    const [url, setUrl] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [error, setErrorMessage] = useState('');

    const handleChange = (event) => {
        setUrl(event.target.value);
    }

    const scrapeRecipe = () => {
        console.log('scrapeRecipe url:', url);
        const searchUrl = url;
        console.log('scrapeRecipe searchUrl', url);
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
            console.log('data', responseData);
            setIngredients([...responseData.data]);
        }).then(() => {
            // console.log('updating ingredients', ingredients);
            updateIngredients(ingredients);
            setErrorMessage('');
        });
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(url);
        scrapeRecipe();
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="url-input">URL</label>
            <input 
                id="url-input" 
                name="url" 
                type="text" 
                autoComplete='true'
                aria-describedby='error-message'
                value={url}
                onChange={handleChange}></input>
            <button>Submit Search</button>
            <div 
                className="error" 
                id="error-message">{error}</div>
        </form>
    </div>
  );
}

export default SearchForm;