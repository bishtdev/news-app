import { useEffect, useState } from "react";
import NewItem from "./NewItem";

const NewBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY
    console.log(apiKey)
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=5e4327e302cc4652a4e1a7241d70c7ef`;

    const fetchArticles = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (err) {
        console.error("Error fetching the news articles:", err);
        setError(err.message);
      }
    };

    fetchArticles();
  }, [category]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.length > 0 ? (
        articles.map((news, index) => (
          <NewItem
            key={news.id || index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <p>No news articles available.</p>
      )}
    </div>
  );
};

export default NewBoard;
