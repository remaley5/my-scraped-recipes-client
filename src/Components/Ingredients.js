import React, { useState, useEffect } from 'react';


function Ingredients() {

    const [ingredients, setIngredients] = useState([])
    // const callApi = () => {
    //   fetch("http://localhost:9000/test")
    //     .then(resp => resp.json)
    //     .then(responseData => setIngredients(responseData.data))
    // }
  
    useEffect(() => {
      async function fetchData() {
        const url = 'https://www.allrecipes.com/recipe/20144/banana-banana-bread';
        const response = await fetch('http://localhost:9000/scrape/useurl', {
            method: 'post', 
            headers: { 'Content-Type': 'application/json'}, 
            body: JSON.stringify({url})
        });
        const responseData = await response.json();
        console.log(responseData.data)
        setIngredients(responseData.data);
      }
      fetchData();
      // callApi()
    }, []);
  
    return (
      <div className="App">
        <header className="App-header">
          {ingredients.map((ingredient) => 
          <li><span>{ingredient.quantity}</span> <span>{ingredient.unit}</span> <span>{ingredient.name}</span></li>)}
        </header>
      </div>
    );
  }

export default Ingredients;