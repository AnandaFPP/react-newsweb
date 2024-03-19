import React from "react";
import { Link } from "react-router-dom";

const ModalHistory = ({ visible, onClose }) => {
  let history = JSON.parse(localStorage.getItem("history")) || [];
  const readNews = JSON.parse(localStorage.getItem("readNews"));

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

  if (readNews && !history.some(news => news.url === readNews.url)) {
    history.unshift(readNews);

    if (history.length > 5) {
      history.pop();
    }

    localStorage.setItem("history", JSON.stringify(history));
  }

  return (
    <>
      <div
        onClick={handleOnClose}
        id="container"
        className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl text-black font-bold break-words">Your History</h2>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <div>
            {history.map((news, index) => (
              <div key={index} className="flex gap-3 items-center mb-4">
                <img src={news.src} alt="News" className="w-[25vh] rounded-lg" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-black break-words">{news.title}</h3>
                  <Link to={news.url}>
                    <button className="text-blue-500 hover:underline">Baca selengkapnya</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalHistory;