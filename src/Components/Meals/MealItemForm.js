// import { Fragment } from "react"
import { useRef, useState } from "react";
import Input from "../UI/Input";
const MealItemForm = props =>{
    const[amountIsValid,setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = (event)=>{
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumber<0 || enteredAmountNumber>5){
            setAmountIsValid(true);
            return
        }
        props.onAddtoCart(enteredAmountNumber);
    }

    return(
        <form onSubmit={submitHandler}>
            <Input label="Amount" ref={amountInputRef}
             input={{
                id:'amount_'+props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1',
            }}
            />
            <button className="cursor-pointer bg-orange-900 text-white py-1 px-8 rounded-3xl font-bold">
                +ADD
            </button>
            {!amountIsValid && <p>Please enter a valid amount(1-5)</p>}
        </form>
    )
}

export default MealItemForm;