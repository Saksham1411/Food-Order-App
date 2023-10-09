import CartIcon from "../Cart/CartIcon";
const CartButton = props=>{
    return(
        <button className="bg-black bg-opacity-50 text-white p-1 px-4 flex justify-around items-center rounded-xl font-bold space-x-2"
                onClick={props.onShowCart}>
            <span className="h-5 w-5">
                <CartIcon  />
            </span>
            <span>Your Cart</span>
            <span className="px-1 rounded-full bg-orange-900">3</span>
        </button>
    )
}

export default CartButton;