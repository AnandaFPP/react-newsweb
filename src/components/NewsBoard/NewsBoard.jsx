import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import CardSkeleton from "../CardSkeleton/CardSkeleton";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('');

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles)
        setIsLoading(false)
    });
  }, []);

  return (
    <>
    <div className=" ">
        <input type="search" placeholder="Search news..." className="bg-slate-200 p-2 w-[80vh]" onChange={(e) => setSearch(e.target.value)}/>
    </div>
      <div className="grid grid-cols-3 gap-3">
        {isLoading && <CardSkeleton cards={9}/>}

        {articles.filter((item) => {
            return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search)
        }).map((news, index) => {
          return (
            <div
            key={index}
              className={`bg-gray-200 rounded-xl ${
                index === 0 || index === 7 ? "md:row-span-2" : ""
              }`}
            >
              <NewsCard
                key={index}
                name={news.source.name}
                title={news.title}
                author={news.author}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
                uploadDate={news.publishedAt}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NewsBoard;
