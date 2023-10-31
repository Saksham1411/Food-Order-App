import React from "react";
import Showcase from "../../Assests/meals.jpg"
import CartButton from "./CartButton"
const Header = props => {
    return (
        <React.Fragment>
            <header className="bg-orange-900 p-4 flex justify-between px-24">
                <h2 className="text-3xl font-bold text-white">FOOD</h2>
                <CartButton onShowCart = {props.onShowCart} />
            </header>
            <div className="h-64 overflow-hidden">
                <img src={Showcase} alt="" className=" w-screen" />
            </div>

        </React.Fragment>
    )
}

export default Header;