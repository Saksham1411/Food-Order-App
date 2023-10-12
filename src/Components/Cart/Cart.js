import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-content";
import CartItem from "./CartItem";
const Cart = props => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `₹ ${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    let cartItems = (
        <ul className="list-none m-0 p-0 max-h-80 overflow-auto">
            {cartCtx.items.map((item) => (
                <CartItem 
                    key={item.id} 
                    name={item.name} 
                    price={item.price} 
                    amount={item.amount}
                    
                 />
            ))}
        </ul>
    );
    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className="flex justify-between items-center font-bold text-2xl my-4">
                <span>total Amount</span>
                <span>{totalAmount}</span>
            </div  >
            <div className="text-right">
                <button className="border border-orange-900 py-2 px-6 rounded-3xl"
                    onClick={props.onHideCart}>Close</button>
                {hasItems && <button className="cursor-pointer py-2 px-6 ml-4 bg-orange-900 rounded-3xl">Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;