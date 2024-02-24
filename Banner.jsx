import React from 'react';

const Banner = () => {
    return (
        <div>
             <div class=" md:flex gap-4">
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
<div  class=" md:w-1/2">
  <div>
    <h1 class="font-bold text-2xl text-white">Upcoming Campaigns</h1>
  </div>
  <div class=" text-center rounded-xl grid grid-cols-2 mx-3  my-4 bg-slate-100 text-black px-4 py-4">
    <h1>happy houre</h1>
    <h1>2d 3s</h1>
    <h1>happy houre</h1>
    <h1>2d 3s</h1>
    

  </div>
  <div class=" text-center rounded-xl grid grid-cols-2 mx-3  my-4 bg-slate-100 text-black px-4 py-4">
    <h1>happy houre</h1>
    <h1>2d 3s</h1>
    <h1>happy houre</h1>
    <h1>2d 3s</h1>
    

  </div>
</div>
        </div>
        </div>
    );
};

export default Banner;