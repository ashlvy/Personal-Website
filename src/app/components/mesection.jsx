import React from 'react';
import Image from "next/image";

const mesection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">


                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                        Hi, I'm Ashley 
                    </h1>
                    <p className=" text-[#ADB7BE] text-lg lg:text-xl">
                        test
                    </p>
                </div>
                <div className= "col-span-5"> 
                <Image
                src="/public/ashley.png"
                alt = "ashleydev"

                width = {200}
                height = {200}
               /> 
                </div>
            </div>
        </section>
    );
};

export default mesection
