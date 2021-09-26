import React from 'react';

const Header = () => {
    return (

        <div className="w-full  ">

            <nav className="flex justify-between items-center p-5 text-white bg-gray-900">
                <h1 className="font-bold text-3xl"><i className="fab fa-connectdevelop"></i> weBuild</h1>

                <div className="text-md">
                    <a className="mr-4 hover:text-blue-400 transition duration-150" href="/approach">Our Apporch</a>
                    <a className="mr-4 hover:text-blue-400 transition duration-150" href="/solution">Solution</a>
                    <a className="mr-4 hover:text-blue-400 transition duration-150" href="/contact">Contact Us</a>
                </div>

            </nav>



            <div className="bg-gray-200 text-blue-500 font-semibold text-xl text-center py-8">
                <h1 className="font-black text-4xl pb-4">Let's Build Your Dream <span className="font-black text-green-500">IT Team</span></h1>
                <p>We build customised digital IT teams for any size organization. We bridge the gap between interesting companies and motivated top talent.</p>
                <h2 className="font-extrabold text-3xl pt-4">Total Budget: $10 Millon</h2>

            </div>

        </div>

    );
};

export default Header;