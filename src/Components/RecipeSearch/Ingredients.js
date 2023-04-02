
function Ingredients({ingredients}) {
  
  return (
        <div className="results">
          <h3>Ingredients</h3>
          <ul>
            {Object.keys(ingredients).map((keyName) => 
              <li key={`ingredient${keyName}`}>
                <span>{ingredients[keyName].quantity} </span> 
                <span>{ingredients[keyName].unit} </span> 
                <span>{ingredients[keyName].name} </span>
              </li>)}
          </ul>
        </div>
    );
  }

export default Ingredients;