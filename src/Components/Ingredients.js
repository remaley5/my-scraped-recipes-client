import React, { useState, useEffect } from 'react';


function Ingredients({ingredients}) {

    //const [ingredients, setIngredients] = useState([])
    // const callApi = () => {
    //   fetch("http://localhost:9000/test")
    //     .then(resp => resp.json)
    //     .then(responseData => setIngredients(responseData.data))
    // }
  
    // useEffect(() => {
    //     const url = 'https://www.allrecipes.com/recipe/20144/banana-banana-bread';
    //     fetch('http://localhost:9000/scrape/useurl', {
    //         method: 'post', 
    //         headers: { 'Content-Type': 'application/json'}, 
    //         body: JSON.stringify({url})
    //     })
    //     .then((response) => response.json())
    //     .then((responseData) => {
    //         console.log('data', responseData);
    //         setIngredients(responseData.data);
    //     });
    // }, [])
  
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