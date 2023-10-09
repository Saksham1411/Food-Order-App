import { Fragment } from "react"
import Input from "../UI/Input";
const MealItemForm = props =>{
    return(
        <Fragment>
            <Input label="Amount" input={{
                id:'amount_'+props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
            }}
            />
            <button className="cursor-pointer bg-orange-900 text-white py-1 px-8 rounded-3xl font-bold">+ADD</button>
        </Fragment>
    )
}

export default MealItemForm;