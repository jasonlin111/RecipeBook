import { useState, useEffect } from "react";
import Recipe from "./Recipe";
import './App.css';
import Header from "./Header";

function App() {
  const [recipes, setRecipes] = useState([]) // stores recipes that we received back after API call
  const [search, setSearch] = useState("") // stores what is typed on the searchbar
  const [query, setQuery] = useState("pudding") // stores submitted search

  useEffect(() => {
    // we put getRecipes inside this hook to resolve the following react-hooks/exhaustive-deps warning:
    // "React Hook useEffect has a missing dependency: 'getRecipes'. Either include it or remove the dependency array"
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_ID}&app_key=${process.env.REACT_APP_EDAMAM_KEY}`)
      const data = await response.json()
      setRecipes(data.hits)
    };
    getRecipes()
  }, [query])

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault() // prevent page refresh after submit
    setQuery(search)
    setSearch("") // empty searchbox after a search is completed
  }

  return (
    <div className="App">
      <Header />
      <form className="searchForm" onSubmit={getSearch}>
        <input className="searchBar" type="text"
               value={search} onChange={updateSearch}/>
        <button className="searchButton" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe key={recipe.recipe.label}
                  title={recipe.recipe.label}
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients}
                  URL={recipe.recipe.url} />
        ))}
      </div>
    </div>
  );
  
}

export default App;
