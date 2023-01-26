import React from "react";

const Cards = () => {
  return (
    <div className="mx-8 mt-16 grid grid-cols-4 gap-4">
      <div className="w-72 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="">
          <a href="#">
            <img
              className="inline-block py-2 ml-12"
              src="https://apollo-singapore.akamaized.net/v1/files/4e6097jup6t71-ID/image;s=300x600;q=60"
              alt="profile"
              width={180}
              height={180}
            />
            <img
            className="inline-block mb-24 ml-7"
              src={require("../assets/like.png")}
              alt="like"
              width={20}
              height={20}
            />
          </a>
        </div>
        <div className="p-5">
          <a href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              RP. 145.000.000
            </h5>
          </a>
          <p className="font-normal text-gray-700 dark:text-gray-400">2015</p>
          <p className="font-thin text-slate-500">
            Toyota Yaris 2015 Trd Sportifo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
