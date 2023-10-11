import { useReducer } from "react";
import CartContext from "./Cart-content";

const defaultCartState = {
    items : [],
    totalAmount:0,
}

const cartReducer = (state,action) => {
    if(action.type === 'add'){
        const updatedItem = state.items.concat(action.item);
        const updateAmount = state.totalAmount + action.item.price * action.item.amount;
        return{
            items:updatedItem,
            totalAmount:updateAmount
        }
    }
    return defaultCartState;
}

const CartProvider = props =>{
    
    const [cartState,dispatchCart] = useReducer(cartReducer,defaultCartState);
    
    const addItemToCartHandler = item => {
            console.log(defaultCartState);
        dispatchCart({type:'add',item:item})
    };
    
    const removeItemToCartHandler = id => {
        dispatchCart({type:'rem' , id:id})
    };

    const cartContext = {
        items:cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem : removeItemToCartHandler
    };


    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;