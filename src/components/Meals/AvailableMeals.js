
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A German specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
];

const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map(meal => (
        <li key={meal.id}>
            {meal.name} - {meal.description} (${meal.price.toFixed(2)})
        </li>
    ));

  return (
    <section className={classes.meals}>
      <h2>Available Meals</h2>
      <ul>
        {mealsList}
      </ul>
    </section>
  );
};

export default AvailableMeals;
