
import './App.css';
import React ,{useEffect,useState} from 'react';
import Recipe from './Recipe';


const App =() => {
  const app_id = "f4a2ae5e";
  const app_key = "741af22487845a3b4744574cbc13162b	";

const [recipes,setRecipes] =useState([]);
const [search,setSearch]= useState("");
const [query,setQuery]=useState("chicken");


useEffect(()=>
{
getRecipes();


},[query]);


const getRecipes = async () => {
  const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`);
  
const data =  await response.json();

setRecipes(data.hits);
console.log(data.hits);


};

const updatesearch= e=>{
  setSearch(e.target.value);
 

}

const getSearch =e =>{
  e.preventDefault();
  setQuery(search);
  setSearch('');

}

  return(
    <div className="App">
     <form onSubmit={getSearch}className="search-form"> 
      

       <input className="search-bar" type="text" value={search} onChange={updatesearch}/>
       <button className="search-button" type="submit"> search
       </button>
      
       
     </form>
     <div className="recipes">
    {recipes.map(recipe =>(
    <Recipe 
    key={recipe.recipe.label}
    title ={recipe.recipe.label} 
    image={recipe.recipe.image}
    calories={recipe.recipe.calories}
    ingredients={recipe.recipe.ingredients}
    />))}
     </div>
    </div>
  )
}

export default App;
