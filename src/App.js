import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [ingredients, setIngredients] = useState([])
  // const callApi = () => {
  //   fetch("http://localhost:9000/test")
  //     .then(resp => resp.json)
  //     .then(responseData => setIngredients(responseData.data))
  // }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:9000/scrape');
      const responseData = await response.json();
      console.log(responseData.data)
      setIngredients(responseData.data);
    }
    fetchData();
    // callApi()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {ingredients.map((ingredient) => 
        <li><span>{ingredient.quantity}</span> <span>{ingredient.unit}</span> <span>{ingredient.name}</span></li>)}
      </header>
    </div>
  );
}

export default App;
