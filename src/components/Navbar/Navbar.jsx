import React, { useState } from "react";
import ModalHistory from "../ModalHistory/ModalHistory";

const Navbar = () => {
  const [historyVisible, setHistoryVisible] = useState(false);

  const handleHistoryClick = () => {
    setHistoryVisible(true);
  };

  const handleCloseModal = () => {
    setHistoryVisible(false);
  };

  return (
    <div className="flex justify-between items-center h-[10vh] mx-auto px-20 text-white bg-[#ADC4CE]">
      <div className="text-3xl font-bold text-[#ADC4CE] bg-[#FFFFFF] p-3 rounded-md transition-colors duration-500 hover:text-[#66FcF1] ">
        Newsweb
      </div>
      <ul className="flex">
        <li>
          <button onClick={handleHistoryClick}>History</button>
          <ModalHistory visible={historyVisible} onClose={handleCloseModal} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;