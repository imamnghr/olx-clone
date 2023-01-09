import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="inset-x-0 top-0 bg-[#EFF1F3] fixed px-8 border-4 flex flex-row border-b-white">
        <img
          alt="logo"
          src={require("../assets/olx.png")}
          width={40}
          height={30}
        />
        <div className="py-2 ml-4 w-3/12">
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <select
                type="text"
                id="simple-search"
                className="bg-gray-50 border-2 border-black text-gray-900 text-sm rounded-sm focus:ring-teal-300 focus:border-teal-300 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-black-600 dark:placeholder-black-400 dark:text-white dark:focus:ring-teal-300 dark:focus:border-teal-300"
                required
              >
                <option selected>Jakarta Selatan, Jakarta..</option>
              </select>
            </div>
          </form>
        </div>
        <div className="relative py-2 px-2 w-3/6">
          <input type="search" id="search-dropdown" className="block p-2.5 w-5/6 z-20 text-sm text-gray-900 bg-gray-50 rounded-sm border-2  border-black focus:ring-teal-300 focus:border-teal-300 dark:bg-gray-700 dark:border-l-gray-700  dark:border-teal-300 dark:placeholder-gray-400 dark:text-white dark:focus:border-teal-300" placeholder="Search Mockups, Logos, Design Templates..." required />
          <button type="submit" className="absolute top-2 mr-16 right-0 p-2.5 h-11 text-sm font-medium text-white bg-black rounded-r-sm border border-black ">
            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
        <button type="button" className="font-medium underline underline-offset-4 font-bold">
          <span>Login/Daftar</span>
        </button>
        <div className="border-4 border-t-cyan-400 border-l-yellow-300 border-b-indigo-500 border-r-indigo-500 rounded-full w-28 mx-6 px-6 pt-2 h-12 mt-1">
          <span><b>+ </b>JUAL</span>
        </div>
      </div>
      <div>
        <span>Semua Kategori</span>
      </div>
    </div>
  );
};

export default Navbar;
