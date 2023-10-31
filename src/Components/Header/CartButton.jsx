import { useContext } from 'react';
import CartContext from '../../Store/Cart-content';
import CartIcon from "../Cart/CartIcon";
const CartButton = props => {

    const cartCtx = useContext(CartContext);
    // console.log(cartCtx.items);
    const numberOfCartItems = cartCtx.items.reduce((currVal,item)=>{
        return currVal + item.amount;
    },0);

    return (
        <button className="bg-black bg-opacity-50 text-white py-2 px-4 flex justify-around items-center rounded-3xl font-bold space-x-2"
            onClick={props.onShowCart}>
            <span className="h-5 w-5">
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className="px-3 rounded-full bg-orange-900">{numberOfCartItems}</span>
        </button>
    )
}

export default CartButton;