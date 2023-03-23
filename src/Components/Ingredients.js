
function Ingredients({ingredients}) {
  
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