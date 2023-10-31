import { Fragment, useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-content";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `₹ ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const addItemToCart = (item) => {
    cartCtx.addItem({
      ...item,
      amount: 1,
    });
  };

  const removeItemFromCart = (id) => {
    cartCtx.removeItem(id);
  };

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

  const modalActions = (
    <div className="text-right">
      <button
        className="border border-orange-900 py-2 px-6 rounded-3xl"
        onClick={props.onHideCart}
      >
        Close
      </button>
      {hasItems && (
        <button
          className="cursor-pointer py-2 px-6 ml-4 bg-orange-900 rounded-3xl"
          onClick={orderHandler}
        >
          Order
        </button>
      )}
    </div>
  );

  const orderSubmitHandler = async (userData) => {
    setIsSubmiting(true);
    await fetch(
      "https://food-cart-d8323-default-rtdb.firebaseio.com/order.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmiting(false);
    setIsSubmited(true);
    cartCtx.clearCart();
  };

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className="flex justify-between items-center font-bold text-2xl my-4">
        <span>total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={props.onHideCart} onConfirm={orderSubmitHandler} />
      )}
      {!isCheckout && modalActions}
    </Fragment>
  );

  const isSubmitingLoader = (
    <div className="flex justify-center items-center ">
          <div className="flex items-center justify-center space-x-2 animate-pulse">
            <div className="w-3 h-3 bg-orange-800 rounded-full"></div>
            <div className="w-3 h-3 bg-orange-800 rounded-full"></div>
            <div className="w-3 h-3 bg-orange-800 rounded-full"></div>
          </div>
        </div>
  );
  const submitedContent = (
    <div className="flex flex-col">
      <p className="mt-2">Order is placed successfully....</p>
      <button
        className="border border-orange-900 py-2 px-6 rounded-3xl self-end mt-8 hover:bg-orange-900 hover:text-white"
        onClick={props.onHideCart}
      >
        Close
      </button>
    </div>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {!isSubmiting && !isSubmited && cartModalContent}
      {isSubmiting && isSubmitingLoader}
      {!isSubmiting && isSubmited && submitedContent}
      {/* {isSubmitingLoader} */}
    </Modal>
  );
};

export default Cart;
