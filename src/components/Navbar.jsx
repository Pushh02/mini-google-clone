import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";
import { useResultContext } from "../context/ResultContextProvider";

export const Navbar = () => {
  const [input, setInput] = useState("");
  const { setSearchTerm } = useResultContext();
  return (
    <>
      <div className="sm:flex sm:flex-wrap sm:pl-16 sm:pt-10">
        <div className="rounded">
          <Link to="/">
            <p className="text-2xl text-center font-bold text-cyan-900 bg-cyan-100 px-2 py-1 rounded-lg">
              Google
            </p>
          </Link>
        </div>
        <div className="">
          <div className="rounded-full shadow-md input ml-9 mt-5 sm:mt-0 h-10 w-96 bg-white">
            <input
              className="h-8 w-80 mt-1 ml-3 focus:outline-none"
              type="text"
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search"
              value={input}
            />
            <Link
              to={'/search'}
              className="pl-5 mt-2 cursor-pointer"
              onClick={() => {
                setSearchTerm(input);                
              }}
            >
              🔍
            </Link>
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};
