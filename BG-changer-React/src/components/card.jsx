import React from "react";

function Card({ userName, btnText }) {
  console.log(userName);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md mb-4">
      <img
        src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover "
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent mt-8"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{userName}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          <a
            href="https://github.com/bsjana007"
            target="_blank"
            rel="noreferrer"
          >
            {btnText}
          </a>
        </button>
      </div>
    </div>
  );
}

export default Card;
