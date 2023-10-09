import Modal from "../UI/Modal";

const Cart = props => {

    let cartItems = (
        <ul className="list-none m-0 p-0 max-h-80 overflow-auto">
            {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    );
    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className="flex justify-between items-center font-bold text-2xl my-4">
                <span>total Amount</span>
                <span>35.62</span>
            </div  >
            <div className="text-right">
                <button className="border border-orange-900 py-2 px-6 rounded-3xl"
                 onClick={props.onHideCart}>Close</button>
                <button className="cursor-pointer py-2 px-6 ml-4 bg-orange-900 rounded-3xl">Order</button>
            </div>
        </Modal>
    )
}

export default Cart;