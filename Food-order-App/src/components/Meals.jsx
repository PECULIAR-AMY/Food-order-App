// import {  useState, useEffect } from "react"
// import MealItem from "./MealItem.jsx";

// export default function Meals () {
//   const [loadedMeals, setLoadedMeals] = useState([]);
    
  
//   useEffect(() => {
//    async function fetchMeals (){
//     const response = await fetch ('http://localhost:3000/meals');

//     if (!response.ok) {
//        //
//     }
// const meals = await response.json();
// setLoadedMeals(meals);
//    }
  
//    fetchMeals();
//   }, [])
    
//     return(
//         <ul id="meals">
//             {loadedMeals.map((meal)=> (
//                 <MealItem key={meal.id} meal={meal} />
//             ))}
//             </ul>
//     );
// }
import { useState, useEffect}


 export default function Meals (){
    const [loadedMeals, setLoadedMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchMeals() {
          const response = await fetch('http://localhost:3000/meals');
          if (!response.ok) {
            console.error('Error fetching meals:', response.statusText);
          }
          const meals = await response.json();
          setLoadedMeals(meals);
          setIsLoading(false);
        }
        fetchMeals();
      }, []);
      
      return (
        <div>
          {isLoading ? <p>Loading...</p> : 
          <ul id="meals">
            {loadedMeals.map(meal => <li key={meal.id}>{meal.name}</li>)}
          </ul>}
        </div>
      );
      

 }


