import React, {useState} from 'react';

function SearchForm({updateIngredients}) {

    const [url, setUrl] = useState('');
    const [ingredientList, updateIngredientList] = useState([]);

    const handleChange = (event) => {
        setUrl(event.target.value);
    }

    const scrapeRecipe = () => {
        console.log('scraping recipe');
        async function fetchData() {
          const url = 'https://www.allrecipes.com/recipe/20144/banana-banana-bread';
          const response = await fetch('http://localhost:9000/scrape/useurl', {
              method: 'post', 
              headers: { 'Content-Type': 'application/json'}, 
              body: JSON.stringify({url})
          });
          const responseData = await response.json();
          console.log('response data', responseData.data)
          updateIngredientList(responseData.data)
        }
        fetchData();
        // callApi()
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