import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../Store/Cart-content";
const MealItem = props => {
    let price = props.price.toFixed(2);

    const cartCtx = useContext(CartContext);
    const addToCartHandler = amount =>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            price:props.price,
            amount:amount
        })
    }

    return (
        <li className="flex justify-between m-4 pb-4 border-b-2 border-gray-700 border-opacity-50">
            <div>
                <h3 className="font-bold">{props.name}</h3>
                <p>{props.description}</p>
                <p className="mt-1 font-bold text-orange-900 text-xl">{'₹' + price}</p>
            </div>
            <div>
                <MealItemForm id={props.id} onAddtoCart={addToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem;