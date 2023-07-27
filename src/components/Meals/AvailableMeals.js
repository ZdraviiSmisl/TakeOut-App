import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card/Card";
import MealsItem from "./MealsItem/MealsItem";
import { useCallback, useEffect, useState } from "react";

// const START__MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = (props) => {
  const [fetchedMeals, setFetchedMeals] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMeals = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await fetch(
        "https://http-requests-3bfcd-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      const fetchedData = [];

      for (let key in data) {
        fetchedData.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: +data[key].price,
        });
      }
      setFetchedMeals(fetchedData);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  let content = <p>No meals found</p>;

  if (fetchedMeals.length > 0) {
    content = fetchedMeals.map((meal) => (
      <MealsItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (loading) {
    content = <p>...Loading content</p>;
  }

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{content}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
