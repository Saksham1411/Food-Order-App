import { Fragment } from "react";
import MealSummary from "./MealSummary";
import AvailabeMeals from "./AvailabeMeals";
const Meals = props =>{
    return(
        <Fragment>
            <MealSummary></MealSummary>
            <AvailabeMeals></AvailabeMeals>
        </Fragment>
    )
}

export default Meals;