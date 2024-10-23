import React, { useState } from "react";

const SearchComponent = ({ setSearchKey, handleSubmit, searchKey }) => {
  return (
    <div className="bg-slate-50 border rounded-md flex items-center h-full justify-center   pl-2 w-[40%] ">
      <input
        value={searchKey}
        onChange={(e) => {
          setSearchKey(e.target.value);
        }}
        className="bg-transparent outline-none border-none p-2  w-full"
        placeholder="Search products here..."
        type="text"
      />
      <button
        onClick={handleSubmit}
        className="bg-orange-500  px-12 py-2 rounded-l-md text-white font-semibold uppercase tracking-widest"
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
