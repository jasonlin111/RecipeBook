import style from "./recipe.module.css";
import SMSForm from './SMSForm';

const Recipe = ({ title, calories, image, ingredients, URL }) => {
   return ( 
      <div className={style.recipe}>
         <div>
            <h1>{title}</h1>
            <h3>Ingredients:</h3>
            <ol>
               {ingredients.map(ingredient => (
                  <li>{ingredient.text}</li>
               ))}
            </ol>

            <h3>Calories: {Math.floor(calories)} cal</h3>
            <h3>Full recipe on: <a href={URL}>{URL} </a></h3>
            <h3>Send to phone (ex: 9998887777):</h3>
            <SMSForm message={title + ": " + URL}/>
         </div>
         

         <img className={style.image} src={image} alt=""/>   
      </div>
   );
}
 
export default Recipe;