import React, {useState} from 'react';

function SearchForm({updateIngredients}) {

    const [url, setUrl] = useState('');
    const [ingredients, setIngredients] = useState([]);

    const handleChange = (event) => {
        setUrl(event.target.value);
    }

    const scrapeRecipe = () => {
        console.log('scraping recipe');
        const url = 'https://www.allrecipes.com/recipe/20144/banana-banana-bread';
        fetch('http://localhost:9000/scrape/useurl', {
            method: 'post', 
            headers: { 'Content-Type': 'application/json'}, 
            body: JSON.stringify({url})
        })
        .then((response) => response.json())
        .then((responseData) => {
            console.log('data', responseData);
            setIngredients([...responseData.data]);
        }).then(() => {
            // console.log('updating ingredients', ingredients);
            updateIngredients(ingredients);
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
    </div>
  );
}

export default SearchForm;