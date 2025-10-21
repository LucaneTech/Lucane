import React from "react";
//logo
const Logo = 'Lucane-light.png';

const Trainings: React.FC = () => {
  return(
       <>
        <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-4">
            <img src={Logo} alt="Lucane Logo" className="mb-4 w-32 h-32" />
            <h1 className="text-3xl font-bold">Welcome to Lucane</h1>
        </div>
       </>
  )
}

export default Trainings;