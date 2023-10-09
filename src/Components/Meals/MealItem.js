import MealItemForm from "./MealItemForm";

const MealItem = props => {
    let price = props.price.toFixed(2);
    return (
        <li className="flex justify-between m-4 pb-4 border-b-2 border-gray-700 border-opacity-50">
            <div>
                <h3 className="font-bold">{props.name}</h3>
                <p>{props.description}</p>
                <p className="mt-1 font-bold text-orange-900 text-xl">{'₹' + price}</p>
            </div>
            <div>
                <MealItemForm id={props.id}/>
            </div>
        </li>
    )
}

export default MealItem;