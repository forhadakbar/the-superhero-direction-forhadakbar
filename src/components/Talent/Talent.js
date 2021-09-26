import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

// Individual card component


const Talent = (props) => {


    const { name, role, img, skill, experience, location, salary, connect, twitter } = props.talent;

    const UserPlusIcon = <FontAwesomeIcon icon={faUserPlus} />

    const locationIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />


    return (


        <div className="bg-white shadow-xl w-full mx-auto rounded-lg">
            <div className="flex justify-center my-4">
                <img src={img} alt="/" className="rounded-full mx-auto  w-28 h-28 shadow-2xl border-4 border-white" />
            </div>


            <div className="">
                <h2 className="text-center font-bold  text-2xl text-gray-900">{name}</h2>
                <p className="text-center text-sm text-gray-400 font-medium">{role} <span className="ml-3">{locationIcon} {location}</span></p>
                {/* <p className="text-center text-sm text-gray-400 font-medium">{locationIcon} {country}</p> */}

                <div className="my-5">
                    <a href={connect} target="_blank" rel="noopener noreferrer" className="font-semibold text-xl text-white block text-center py-3 bg-blue-400 hover:bg-blue-500"><i class="fab fa-twitter-square"></i> {twitter}</a>
                </div>


                <div className="w-full my-2 px-4">
                    <h3 className="font-bold text-gray-600 text-left">Key Skills: {skill}</h3>
                    <div className="mt-3 w-full">
                        <div className="w-full border-t-2 py-3 border-gray-100 font-medium text-gray-600 w-full block hover:bg-gray-100 transition duration-150">
                            Experience:
                            <span className="text-gray-400 text-sm"> {experience} Years</span>
                        </div>
                        <div className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-3 w-full block hover:bg-gray-100 transition duration-150">
                            Salary:
                            <span className="text-gray-400 text-sm"> ${Math.round(salary).toLocaleString()}</span>
                        </div>
                        <div className="font-medium text-gray-100 block  transition duration-150 flex justify-center">
                            <button className="bg-green-500 w-3/4  hover:bg-green-600 p-2 rounded-lg mt-3 " onClick={() => props.handleAddtoCart(props.talent)}>{UserPlusIcon} add to Your Team</button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-evenly my-3">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="bg font-bold text-2xl text-blue-800 w-full text-center py-3 hover:bg-blue-800 hover:text-white hover:shadow-lg"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="bg font-bold text-2xl text-yellow-600 w-full text-center py-3 hover:bg-yellow-600 hover:text-white hover:shadow-lg"><i class="fab fa-instagram-square"></i></a>
                    <a href="/" className="bg font-bold text-2xl text-gray-600 w-full text-center py-3 hover:bg-gray-600 hover:text-white hover:shadow-lg"><i class="fas fa-envelope"></i></a>
                </div>
            </div >
        </div >
    );
};

export default Talent;