import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-content";
import CartItem from "./CartItem";
import Checkout from "./Checkout";



const Cart = props => {

    const [isCheckout, setIsCheckout] = useState(false);

    const cartCtx = useContext(CartContext);

    const totalAmount = `₹ ${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const addItemToCart = (item) => {
        cartCtx.addItem({
            ...item, amount: 1
        })
    }

    const removeItemFromCart = (id) => {
        cartCtx.removeItem(id);
    }

    let cartItems = (
        <ul className="list-none m-0 p-0 max-h-48 overflow-auto">
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onAdd={addItemToCart.bind(null, item)}
                    onRemove={removeItemFromCart.bind(null, item.id)}
                />
            ))}
        </ul>
    );

    function orderHandler() {
        setIsCheckout(true);
    }

    const modalActions = <div className="text-right">
        <button className="border border-orange-900 py-2 px-6 rounded-3xl"
            onClick={props.onHideCart}>Close</button>
        {hasItems && <button className="cursor-pointer py-2 px-6 ml-4 bg-orange-900 rounded-3xl" onClick={orderHandler}>Order</button>}
    </div>;

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className="flex justify-between items-center font-bold text-2xl my-4">
                <span>total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel ={props.onHideCart}/>}
            {!isCheckout && modalActions}

        </Modal>
    )
}

export default Cart;