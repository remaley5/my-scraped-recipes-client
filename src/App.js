import './App.css';
import CreateRecipes from './Components/CreateRecipes'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <div>Scraped Recipes</div> */}
      </header>
      <main>
        <CreateRecipes/>
      </main>
    </div>
  );
}

export default App;
