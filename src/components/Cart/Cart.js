import React from 'react';
import CartItem from '../CartItem/CartItem';

const Cart = (props) => {

    const { cart } = props;


    let salary = 0;
    for (let talent of cart) {
        salary = salary + talent.salary;

    }

    return (

        <div className="bg-white shadow-xl w-full mx-auto rounded-lg py-4">

            <h1 className="font-bold text-3xl text-center">Team Summary</h1>


            <div className="w-full my-2 px-4">
                <div className="mt-3 w-full">
                    <div className="font-bold text-xl text-center w-full border-t-2 py-3 border-gray-100 font-medium text-gray-600 w-full block hover:bg-gray-100 transition duration-150">
                        Number of Team Member: {cart.length}
                    </div>

                    {/* add cart item component to show cart items */}

                    {
                        cart.map(cartItem => <CartItem
                            cartItem={cartItem}
                            key={cartItem.id}
                        ></CartItem>)
                    }


                    <div className="font-bold text-xl text-center w-full border-t-2 border-gray-100 font-medium text-gray-600 py-3 w-full block hover:bg-gray-100 transition duration-150">
                        Total Salary: ${Math.round(salary).toLocaleString()}
                    </div>

                    <div className="font-medium text-gray-100 block  transition duration-150 flex justify-center">
                        <button className="bg-green-500 w-3/4  hover:bg-green-600 p-2 rounded-lg mt-3 "> Build Your Team</button>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default Cart;