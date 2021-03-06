import React from 'react';
import style from './Recipe.module.css'
const Recipe =({title,calories,image,ingredients})=>{
   
    return(
        <div className={style.recipe}>
           
            <img  className={style.image}src={image} alt=""/>
            <h1 >{title}</h1>
         <ol>
                {ingredients.map(ingredient =>(
                    <li onClick="button">{ingredient.text}</li>
                ))}
                </ol>
          {/*  <p>{calories}</p>*/}
        
        </div>
    );
};
export default Recipe;