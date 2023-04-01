
function Ingredients({ingredients}) {
  
  return (
      <div className="results-wrap">
        <div className="results">
          <h3>Ingredients</h3>
          <ul>
            {ingredients.map((ingredient, idx) => 
            <li key={`ingredient${idx + 1}`}><span>{ingredient.quantity}</span> <span>{ingredient.unit}</span> <span>{ingredient.name}</span></li>)}
          </ul>
        </div>
      </div>
    );
  }

export default Ingredients;