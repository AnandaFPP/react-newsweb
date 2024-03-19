import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../../assets/img/news.png";

const NewsCard = ({
  name,
  title,
  author,
  description,
  src,
  url,
  uploadDate,
}) => {

  const formatDate = (dateString) => {
    const options = { weekday: 'short', day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', options);
  };

  const handleReadMoreClick = () => {
    const readNews = {
      title: title,
      src: src,
      url: url
    };
    localStorage.setItem('readNews', JSON.stringify(readNews));
  };

  return (
    <>
      <div className="flex flex-col bg-gray-200 border-2 rounded-xl h-full">
        <img
          src={src ? src : defaultImg}
          className="rounded-xl rounded-b-none"
          alt="News"
        />
        <div className="my-2 p-4">
          <h2 className="font-bold text-2xl my-2">{title}</h2>
          <div className="flex items-center justify-around gap-2">
            <span className="bg-slate-400 text-white px-2 py-1 rounded-xl text-sm my-2 max-w-[250px]">
              Author by: {author ? author : 'Unknown'}
            </span>
            <h6>Publish At: {formatDate(uploadDate)}</h6>
          </div>
          <p className="text-xl my-2">
            {description
              ? description
              : `This news article aims to provide comprehensive coverage of '${title}' which has recently garnered attention. While specific details are currently unavailable, this placeholder description serves as a reminder to check back for updates as more information becomes available. Our team is actively monitoring the situation and will provide a detailed report once confirmed data is obtained.`}
          </p>
          <div className="flex items-center justify-between">
            <Link to={url}>
              <button onClick={handleReadMoreClick} className="bg-blue-500 text-white px-2 py-1 rounded-sm text-sm my-1">
                Read More
              </button>
            </Link>
              <p className="font-semibold text-2xl bg-slate-400 p-2 rounded-xl text-[#FFFFFF]">{name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;