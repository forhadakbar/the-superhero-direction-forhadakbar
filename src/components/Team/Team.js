import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Talent from '../Telent/Talent';


const Team = () => {

    const [talents, setTalent] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {

        fetch('data.JSON')
            .then(res => res.json())
            .then(data => setTalent(data))

    }, [])

    const handleAddtoCart = (talent) => {
        const newCart = [...cart, talent];
        setCart(newCart);
    }


    return (
        <div className="grid grid-cols-3 mt-24 px-4">

            <div className="grid grid-cols-3 gap-4 col-span-2">

                {
                    talents.map(talent => <Talent
                        talent={talent}
                        handleAddtoCart={handleAddtoCart}
                        key={talent.id}
                    >

                    </Talent>)
                }

            </div>

            <div className="pl-4">
                <Cart cart={cart}></Cart>
            </div>


        </div >
    );
};

export default Team;