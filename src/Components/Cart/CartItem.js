
const CartItem = props => {

    const price = `₹ ${props.price.toFixed(2)}`;

    return (
        <li className="flex justify-between items-center border-b-2 border-solid py-4 my-4">
            <div>
                <h2 className="mx-2">{props.name}</h2>
                <div className="w-40 flex justify-between items-center">
                    <span className="font-bold ">{price}</span>
                    <span className="font-bold border border-solid py-1 px-3 rounded-md">x {props.amount} </span>
                </div>
            </div>
            <div className="flex flex-col">
                <button className="font-bold text-xl  border border-solid w-12 text-center rounded-md bg-transparent cursor-pointer ml-4 m-1">-</button>
                <button className="font-bold text-xl  border border-solid w-12 text-center rounded-md bg-transparent cursor-pointer ml-4 m-1">+</button>
            </div>
        </li>
    )
}
export default CartItem;