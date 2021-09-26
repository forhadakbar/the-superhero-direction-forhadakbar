import React from 'react';

const CartItem = (props) => {

    const { name, img, salary, role, experience } = props.cartItem

    const isPro = experience > 5;




    return (
        <div className="bg-gray-300 flex items-center  my-3 rounded-xl pl-3">

            <img className="rounded-full w-20 h-20 shadow-2xl border-4 border-white" src={img} alt="" />

            <div className=" flex justify-between py-3 w-10/12">

                <div className="ml-12 ">
                    <h3 className="font-bold text-gray-600 text-left">{name}</h3>

                    <h3 className="font-md text-gray-600 text-left">${Math.round(salary).toLocaleString()}</h3>

                    <h3 className="font-md text-gray-600 text-left">{role}</h3>
                </div>

                {/* show pro tag if experience is more than 5 years */}

                {isPro ? <h1 className="font-bold text-xl bg-yellow-500 px-4 h-1/2 rounded">Pro</h1> : ''}

            </div>







        </div>
    );
};

export default CartItem;