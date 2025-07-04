
import MealSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react/jsx-runtime";

const Meals = () => {
    return (
        <Fragment>
            <MealSummary />
            <AvailableMeals />
        </Fragment>
    );
};
export default Meals;