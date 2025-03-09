"use client";

import React, { useState } from "react";
import Link from "next/link";

const PrizesTable = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter(
    (item) =>
      item.prizes.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.winners.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-6">
      <h1 className="text-4xl font-semibold text-white mb-4 text-center md:text-left">
        Prizes
      </h1>
      <div className="mb-6 flex items-center gap-4">
        <input
          type="text"
          placeholder="Search by prize or winners..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-white opacity-90 border border-gray-300 rounded-md px-4 py-2 w-full max-w-md focus:outline-none"
        />
        <button className="bg-[#694329] text-white px-4 py-2 rounded-md hover:bg-[#463325] focus:outline-none focus:ring-2">
          Search Prizes
        </button>
      </div>
      <table className="min-w-full table-auto bg-white opacity-90 rounded-lg overflow-hidden shadow-md">
        <thead className="bg-[#694329] text-left">
          <tr>
            <th className="px-6 py-3 text-sm font-semibold text-white">Prize</th>
            <th className="px-6 py-3 text-sm font-semibold text-white">Winner Group</th>
          </tr>
        </thead>
        <tbody className="text-sm text-black">
          {filteredData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-200 transition-all duration-200">
              <td className="px-6 py-3 border-t border-gray-200 text-lg">{item.prizes}</td>
              <td className="px-6 py-3 border-t border-gray-200 text-lg">{item.winners}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-8 text-center text-white text-2xl">
        Congratulations to all prize winners! 🎉 If your group name appears here, please join this
        <Link href="https://t.me/+TU3TWEZkG-tlMzQ1" className="text-blue-400"> telegram group!</Link>
      </div>
    </div>
  );
};

export default PrizesTable;