import { useEffect, useState } from "react";
import Cards from "../UI/Cards";
import MealItem from "./MealItem";

const AvailabeMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      const raw = await fetch('https://food-cart-d8323-default-rtdb.firebaseio.com/meals.json');

      if (!raw.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await raw.json();

      let loadedData = [];
      for (const key in data) {
        loadedData.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        })
      }
      setMeals(loadedData);
      setIsLoading(false);
      // console.log(loadedData);
    }
    fetchMeals().catch((error) => {
      setIsError(error.message);
      setIsLoading(false);
    });


}, [])
if (isLoading) {
  return <section className="text-center text-white text-2xl">
    <p><span className="w-12 h-12 border-4 border-white border-b-orange-700 rounded-full inline-block animate-spin"></span></p>
  </section>
}

if (isError) {
  console.log('in');
  return <section className="text-center text-red-700 font-bold text-3xl">
    <p>{isError}</p>
  </section>
}

const mealsList = meals.map((meal) => (
  <MealItem
    id={meal.id}
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
  />
));
return (
  <section className="max-w-4xl mx-auto">
    <Cards>
      <ul className="list-none m-0 p-0">
        {mealsList}
      </ul>
    </Cards>
  </section>
)
}
export default AvailabeMeals;