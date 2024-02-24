import React from 'react';

const Nevber = () => {
    return (
        <div><div className=" md:flex justify-between px-9 py-5 items-center bg-green-900 text-white">
        <div>
        <h1 className='font-bold md:text-7xl text-3xl'> E-valy</h1>
        </div>
        <div className="flex">
        <input className="md:px-1 md:py-1 rounded-l-lg  text-black bg-white" type="text" />
        <button className="btn btn-primary rounded-l-none  md:mr-0 mr-6"> Search</button>
        </div>
        <div className="flex md:gap-6 gap-1 md:my-0 my-1">
        <button className="font-bold text-white btn btn-error"> shop</button>
        <button className="font-bold text-white btn btn-error"> sing up</button>

        </div>
       </div>
       

        </div>
    );
};

export default Nevber;